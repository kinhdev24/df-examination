"use client"

import React, { PropsWithChildren } from "react"
import { NextUIProvider as NextUIProviderOrigin } from "@nextui-org/react"
import { Toaster } from "sonner"
import { useTheme } from "next-themes"

const NextUIProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme()

  return (
    <NextUIProviderOrigin>
      <Toaster richColors theme={theme as any} />
      {children}
    </NextUIProviderOrigin>
  )
}

export default NextUIProvider
