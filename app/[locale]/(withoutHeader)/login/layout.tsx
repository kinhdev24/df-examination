import Image from "next/image"
import type { PropsWithChildren } from "react"
import Banner from "/public/banner.png"
import { ToggleTheme } from "@/components/ToggleTheme"
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
            <ToggleTheme />
          </div>
          <div className="flex-1"> {children}</div>
          <SelectLocale />
        </div>
      </div>
      <div className="flex-1 h-full hidden lg:block relative">
        <ImageWithBlur
          src={Banner}
          className="w-full h-full object-cover rounded-l-3xl"
          alt="banner"
        />

        <div className="absolute bottom-14 left-14 right-14 text-white">
          <div className="text-3xl font-medium max-w-[85%]">
            <div className="mb-10">
              Digital Fortress has been a game-changer for our content creation
              process.
            </div>
            <div className="mb-10">
              The AI-powered tools are incredibly user-friendly and have saved
              us countless hours of work.
            </div>
            <div>
              <p className="text-xl">Lily Alisson</p>
              <p className="text-xl text-green-500">CMO at Digital Fortress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
