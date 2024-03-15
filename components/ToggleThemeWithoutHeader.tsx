"use client"

import { Tab, Tabs } from "@nextui-org/react"
import { useTheme } from "next-themes"
import React from "react"
import { TbSunFilled } from "react-icons/tb"
import { IoMoonOutline } from "react-icons/io5"
import { useTranslations } from "next-intl"

export const ToggleThemeWithoutHeader = () => {
  const { theme, setTheme } = useTheme()
  const t = useTranslations("mode")

  return (
    <Tabs
      radius="md"
      aria-label="Tabs radius"
      fullWidth
      onSelectionChange={(mode) => {
        setTheme(mode as string)
      }}
      selectedKey={theme}
    >
      <Tab
        key="light"
        title={
          <div className="flex items-center space-x-2 gap-2">
            <TbSunFilled size={20} />
            {t("light")}
          </div>
        }
      />
      <Tab
        key="dark"
        title={
          <div className="flex items-center space-x-2 gap-2">
            <IoMoonOutline size={20} />
            {t("dark")}
          </div>
        }
      />
    </Tabs>
  )
}
