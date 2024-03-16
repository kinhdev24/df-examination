"use client"

import { Button, Checkbox, Input } from "@nextui-org/react"
import { signIn } from "next-auth/react"
import { useLocale, useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import React, { useState, useTransition } from "react"
import { LuLock, LuMail } from "react-icons/lu"
import { toast } from "sonner"

const LoginForm = () => {
  const [value, setValue] = React.useState("")
  const [isPending, startTransition] = useTransition()
  const [errorMessage, setErrorMessage] = useState("")

  const router = useRouter()
  const t = useTranslations("login-page")
  const locale = useLocale()

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  const isInvalid = React.useMemo(() => {
    if (value === "") return false

    return validateEmail(value) ? false : true
  }, [value])

  return (
    <form
      action={(formData) =>
        startTransition(async () => {
          {
            const email = formData.get("email") as string
            const password = formData.get("password") as string

            try {
              const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
              })

              if (res?.ok) {
                router.replace(`/${locale}/dashboard`)
                toast.success("Successfully signed in")
              }

              if (res?.error) {
                setErrorMessage(res.error)
                toast.error(res.error)
              }
            } catch (error) {
              console.log({ error })
            }
          }
        })
      }
    >
      <Input
        name="email"
        value={value}
        type="email"
        placeholder="you@digitalfortress.dev"
        labelPlacement="outside"
        startContent={
          <LuMail className="text-2xl text-default-400 pointer-events-none mr-2 " />
        }
        onValueChange={setValue}
        variant="bordered"
        size="lg"
        isRequired
        isInvalid={isInvalid || !!errorMessage}
        color={isInvalid ? "danger" : "success"}
        errorMessage={
          isInvalid && <div className="text-sm">{t("email_invalid")}</div>
        }
      />
      <Input
        name="password"
        className="mt-6"
        isRequired
        type="password"
        placeholder={t("password")}
        labelPlacement="outside"
        startContent={
          <LuLock className="text-2xl text-default-400 pointer-events-none mr-2" />
        }
        isInvalid={!!errorMessage}
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
        disabled={isPending}
        isLoading={isPending}
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
