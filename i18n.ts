import { notFound } from "next/navigation"
import { getRequestConfig, unstable_setRequestLocale } from "next-intl/server"
import { locales } from "./shared/config"

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  unstable_setRequestLocale(locale)

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: "Asia/Ho_Chi_Minh",
  }
})
