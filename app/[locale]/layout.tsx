import { AppProvider } from "@/providers/AppProvider"
import { NextIntlProvider } from "@/providers/NextIntlProvider"
import { unstable_setRequestLocale } from "next-intl/server"
import type { PropsWithChildren } from "react"

export default function LocaleLayout({
  children,
  ...pageProps
}: PropsWithChildren & any) {
  unstable_setRequestLocale(pageProps.locale)

  return (
    <NextIntlProvider {...pageProps}>
      <AppProvider {...pageProps}>{children}</AppProvider>
    </NextIntlProvider>
  )
}
