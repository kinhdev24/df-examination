import createIntlMiddleware from "next-intl/middleware"

export default createIntlMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
}
