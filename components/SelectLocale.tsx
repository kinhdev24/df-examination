"use client"

import { locales } from "@/shared/config"
import { Avatar, Select, SelectItem } from "@nextui-org/react"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import React, { ChangeEventHandler } from "react"

const localeData: Record<string, { name: string; code: string }> = {
  en: { name: "English", code: "us" },
  vi: { name: "Vietnamese", code: "vn" },
}

const items = locales.map((key) => ({
  key,
  name: localeData[key].name,
  avatar: `https://flagcdn.com/${localeData[key].code}.svg`,
}))

export const SelectLocale = () => {
  const pathName = usePathname()
  const router = useRouter()

  const currentLocale = pathName.split("/")[1]

  const handleLocaleChange = (e: any) => {
    const newLocale = e.target.value
    const newSegments = pathName.split("/")

    newSegments[1] = newLocale

    const newPath = newSegments.join("/")
    router.push(newPath)
    router.refresh()
  }

  return (
    <Select
      items={items}
      labelPlacement="outside"
      aria-label="select-locale"
      classNames={{
        base: "max-w-44",
        trigger: "h-12",
      }}
      radius="lg"
      onChange={handleLocaleChange}
      selectedKeys={[currentLocale]}
      selectionMode="single"
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item?.data?.name}
              className="flex-shrink-0"
              size="sm"
              src={item?.data?.avatar}
            />
            <span>{item?.data?.name}</span>
          </div>
        ))
      }}
    >
      {(locale) => (
        <SelectItem key={locale.key} textValue={locale.name}>
          <div className="flex gap-2 items-center">
            <Avatar
              alt={locale.name}
              className="flex-shrink-0"
              size="sm"
              src={locale.avatar}
            />
            <span className="text-small">{locale.name}</span>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}
