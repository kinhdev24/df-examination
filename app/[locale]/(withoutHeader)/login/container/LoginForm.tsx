"use client"

import { Button, Checkbox, Input } from "@nextui-org/react"
import { useTranslations } from "next-intl"
import React from "react"
import { useFormState } from "react-dom"
import { LuMail, LuLock } from "react-icons/lu"
import { login } from "../actions"
import { signIn } from "next-auth/react"

const LoginForm = () => {
  const [value, setValue] = React.useState("")
  const t = useTranslations("login-page")

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  const isInvalid = React.useMemo(() => {
    if (value === "") return false

    return validateEmail(value) ? false : true
  }, [value])
  return (
    <form
      action={async (formData) => {
        const email = formData.get("email")
        const password = formData.get("password")
      }}
    >
      <Input
        name="email"
        value={value}
        type="email"
        required
        placeholder="you@digitalfortress.dev"
        labelPlacement="outside"
        startContent={
          <LuMail className="text-2xl text-default-400 pointer-events-none mr-2 " />
        }
        onValueChange={setValue}
        variant="bordered"
        size="lg"
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        errorMessage={
          isInvalid && <div className="text-sm">{t("email_invalid")}</div>
        }
      />
      <Input
        name="password"
        className="mt-6"
        type="password"
        placeholder={t("password")}
        labelPlacement="outside"
        startContent={
          <LuLock className="text-2xl text-default-400 pointer-events-none mr-2" />
        }
        size="lg"
      />

      <div className="flex justify-between items-center my-12">
        <Checkbox defaultSelected color="success" name="remember_me">
          <div className="text-gray-400">{t("remember_me")}</div>
        </Checkbox>

        <div className="text-base bg-clip-text text-transparent font-semibold bg-gradient-to-r from-blue-300 to-green-300">
          {t("forgot_password")}
        </div>
      </div>
      <Button
        fullWidth
        color="success"
        className="bg-green-300 font-semibold text-base"
        type="submit"
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
