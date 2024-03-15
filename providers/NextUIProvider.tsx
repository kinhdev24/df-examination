"use client"

import React, { PropsWithChildren } from "react"
import { NextUIProvider as NextUIProviderOrigin } from "@nextui-org/react"

const NextUIProvider = ({ children }: PropsWithChildren) => {
  return <NextUIProviderOrigin>{children}</NextUIProviderOrigin>
}

export default NextUIProvider
