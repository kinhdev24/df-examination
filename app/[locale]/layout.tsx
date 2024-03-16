import { AppProvider } from "@/providers/AppProvider"
import { NextIntlProvider } from "@/providers/NextIntlProvider"
import { unstable_setRequestLocale } from "next-intl/server"
import type { PropsWithChildren } from "react"

export default function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren & {
  params: any
}) {
  unstable_setRequestLocale(locale)

  return (
    <NextIntlProvider params={{ locale }}>
      <AppProvider params={{ locale }}>{children}</AppProvider>
    </NextIntlProvider>
  )
}
