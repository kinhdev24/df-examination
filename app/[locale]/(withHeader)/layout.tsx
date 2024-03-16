import Header from "@/components/Layout/Header"
import Sidebar from "@/components/Layout/Sidebar"
import type { PropsWithChildren } from "react"

export default function WithHeaderLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className="dark:bg-dark-blue min-h-screen bg-light-gray flex p-6 gap-3 dark:text-text-secondary">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  )
}
