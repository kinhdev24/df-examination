import type { Metadata } from "next"
import LoginContainer from "./container"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
  title: "Login | DF Examination",
  description: "Login page",
}

export default function LoginPage() {
  return <LoginContainer />
}
