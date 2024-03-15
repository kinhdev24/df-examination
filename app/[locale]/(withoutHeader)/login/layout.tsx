import Image from "next/image"
import type { PropsWithChildren } from "react"
import Banner from "/public/banner.png"
import { ToggleThemeWithoutHeader } from "@/components/ToggleThemeWithoutHeader"
import { SelectLocale } from "@/components/SelectLocale"
import ImageWithBlur from "@/components/Image"

export default function WithoutHeaderLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className="h-screen flex dark:bg-dark-blue light:text-text-primary">
      <div className="flex-1">
        <div className="max-w-xl m-auto py-6 flex flex-col  items-center h-full">
          <div className="w-1/2 m-auto">
            <ToggleThemeWithoutHeader />
          </div>
          <div className="flex-1"> {children}</div>
          <SelectLocale />
        </div>
      </div>
      <div className="flex-1 h-full hidden lg:block">
        <ImageWithBlur
          src={Banner}
          className="w-full h-full object-cover rounded-l-3xl"
          alt="banner"
        />
      </div>
    </div>
  )
}
