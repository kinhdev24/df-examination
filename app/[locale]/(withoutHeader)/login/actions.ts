"use server"

import { DF_EXAM_URL } from "@/shared/config"
import axios from "axios"

export const login = async (prevState: string, formData: FormData) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    const url = DF_EXAM_URL + "/auth/login"

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    if (!res.ok) {
      return res.json()
    } else {
      return res.json()
    }

    return "success"
  } catch (error) {
    return error
  }
}
