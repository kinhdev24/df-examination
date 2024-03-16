import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl

  const session = await getToken({ req })
  const pathName = url.pathname

  const segments = pathName.split("/")
  const locale = segments[1]

  if (!session && !pathName.includes("login")) {
    return NextResponse.redirect(new URL(`${locale}/login`, req.url))
  } else if (session && pathName.includes("login")) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, req.url))
  }

  // Trả về một phản hồi mặc định nếu không có điều kiện nào được đáp ứng
  return NextResponse.next()
}
