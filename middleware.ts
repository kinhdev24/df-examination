import { getToken } from "next-auth/jwt"
import createIntlMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"
import { locales } from "./shared/config"

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get("x-your-custom-locale") || "en"

  const pathName = request.nextUrl.pathname
  const url = request.url

  const [, locale, ...segments] = pathName.split("/")

  const token = await getToken({ req: request, raw: true })

  if (!locale) {
    if (token) {
      request.nextUrl.pathname = `/en/dashboard`
      return NextResponse.redirect(request.nextUrl.toString())
    } else {
      request.nextUrl.pathname = `/en/login`
      return NextResponse.redirect(request.nextUrl.toString())
    }
  }

  if (!!token && !segments.length) {
    request.nextUrl.pathname = `/${locale}/dashboard`

    return NextResponse.redirect(request.nextUrl.toString())
  }

  if (!token && !segments.includes("login")) {
    request.nextUrl.pathname = `/${locale}/login`

    return NextResponse.redirect(request.nextUrl.toString())
  }

  if (token && (segments.includes("login") || !segments.length)) {
    request.nextUrl.pathname = `/${locale}/dashboard`

    return NextResponse.redirect(request.nextUrl.toString())
  }

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
  })
  const response = handleI18nRouting(request)

  // Step 3: Alter the response (example)
  response.headers.set("x-your-custom-locale", defaultLocale)

  return response
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*", "/((?!api|_next|.*\\..*).*)"],
}
