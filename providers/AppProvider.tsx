"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"
import NextUIProvider from "./NextUIProvider"

export const AppProvider = ({
  children,
  ...pageProps
}: PropsWithChildren & { locale: any }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableSystem defaultTheme="light">
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
