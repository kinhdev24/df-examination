"use server"

import { signIn } from "next-auth/react"

export const login = async (prevState: string, formData: FormData) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    console.log(res)

    return "success"
  } catch (error) {
    return "error"
  }
}
