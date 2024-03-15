"use client"

import React, { PropsWithChildren } from "react"
import NextUIProvider from "./NextUIProvider"
import { ThemeProvider } from "next-themes"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { SessionProvider } from "next-auth/react"

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableSystem defaultTheme="light">
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
