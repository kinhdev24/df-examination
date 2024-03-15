import { useTranslations } from "next-intl"
import React from "react"
import LoginForm from "./LoginForm"

const LoginContainer = () => {
  const t = useTranslations("login-page")
  return (
    <div className="flex flex-col justify-center h-full">
      <p className="text-4xl mb-6">
        {t("hello")},{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Digital Fortress
        </span>
      </p>
      <p className="text-text-secondary text-lg mb-16">{t("slogan")}</p>
      <LoginForm />
    </div>
  )
}

export default LoginContainer
