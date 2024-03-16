import React, { ReactNode, memo } from "react"
import { ToggleTheme } from "../ToggleTheme"
import ImageWithBlur from "../Image"
import DF_LOGO from "/public/df_logo.png"
import { IoIosArrowBack } from "react-icons/io"
import { Divider } from "@nextui-org/react"
import { Calendar, ClipboardText, Health, WifiSquare } from "iconsax-react"
import { cn } from "@/utils"

type TNavItem = {
  slug: string
  name: string
  icon: ReactNode
  count?: number
}

const Sidebar = () => {
  const navItems: TNavItem[] = [
    {
      slug: "dashboard",
      name: "Dashboard",
      icon: <Health size="24" />,
    },
    {
      slug: "task",
      name: "Task",
      icon: <ClipboardText size="24" />,
    },
    {
      slug: "project",
      name: "Project",
      icon: <WifiSquare size="24" />,
    },
    {
      slug: "schedule",
      name: "Schedule",
      icon: <Calendar size="24" />,
      count: 3,
    },
  ]

  return (
    <div className="w-1/4 min-h-[calc(100vh-12rem)] sticky top-0 dark:bg-deep-back bg-white py-6 px-4 rounded-2xl flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center">
          <div className="w-32">
            <ImageWithBlur alt="df_logo" src={DF_LOGO} />
          </div>
          <div className="w-8 h-8 dark:bg-dark-blue bg-light-gray rounded-full hover:scale-105 duration-200 cursor-pointer flex items-center justify-center">
            <IoIosArrowBack className="w-4 h-4 dark:text-white text-black" />
          </div>
        </div>
        <Divider className="my-9" />
        {navItems.map((item) => {
          return <NavItem key={item.slug} {...item} />
        })}
      </div>
      <ToggleTheme />
    </div>
  )
}

const NavItem = ({ icon, name, slug, count }: TNavItem) => {
  const isActive = slug === "dashboard"
  return (
    <div
      className={cn(
        "w-full p-3 flex items-center justify-between cursor-pointer text-text-secondary",
        isActive && "bg-success-300 text-black rounded-xl"
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        {name}
      </div>
      {count && (
        <div className="w-8 h-8 rounded-xl flex items-center  justify-center bg-success-300 font-semibold text-black">
          {count}
        </div>
      )}
    </div>
  )
}

export default memo(Sidebar)
