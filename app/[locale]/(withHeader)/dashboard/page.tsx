import type { Metadata } from "next"
import DashboardContainer from "./container"
import { getToken } from "next-auth/jwt"
import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import { authOptions } from "@/auth"
import { DF_EXAM_URL } from "@/shared/config"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Dashboard | DF Examination",
  description: "",
}
async function getProject() {
  const session = (await getServerSession(authOptions)) as any
  const accessToken = session?.user?.access_token
  const url = `${DF_EXAM_URL}/projects`

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return await response.json()
}

export default async function Page() {
  const data = await getProject()
  const projects = data.results

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="text-3xl dark:text-white font-medium mb-4">Dashboard</div>
      <DashboardContainer projects={projects} />
    </Suspense>
  )
}
