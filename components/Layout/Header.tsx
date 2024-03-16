"use client"

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react"
import { FiSearch } from "react-icons/fi"
import { FiBell } from "react-icons/fi"
import { BiMessageDetail } from "react-icons/bi"
import { SelectLocale } from "../SelectLocale"
import { signOut } from "next-auth/react"

const Header = () => {
  return (
    <div className="h-24 w-full bg-white dark:bg-deep-back rounded-2xl p-6 flex justify-between items-center mb-5">
      <div className="w-1/4">
        <Input
          fullWidth
          type="text"
          placeholder="Search anything..."
          labelPlacement="outside"
          startContent={
            <FiSearch className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <div className="flex items-center gap-8">
        <div className="w-44">
          <SelectLocale />
        </div>
        <BiMessageDetail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        <div className="relative">
          <FiBell className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">frontend.exam@digitalfortress.dev</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
