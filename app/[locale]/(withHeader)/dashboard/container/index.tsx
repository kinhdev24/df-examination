"use client"
import { Button } from "@nextui-org/react"
import { signOut } from "next-auth/react"
import React from "react"

const DashboardContainer = () => {
  return (
    <Button
      onClick={() => {
        signOut()
      }}
    >
      Logout
    </Button>
  )
}

export default DashboardContainer
