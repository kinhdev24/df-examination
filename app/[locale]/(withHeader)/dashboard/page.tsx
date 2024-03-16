import type { Metadata } from "next"
import DashboardContainer from "./container"

export const metadata: Metadata = {
  title: "Dashboard | DF Examination",
  description: "",
}

export default function Page() {
  return (
    <div>
      Dashboard
      <DashboardContainer />
    </div>
  )
}
