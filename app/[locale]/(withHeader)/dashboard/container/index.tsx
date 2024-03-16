"use client"

import React from "react"
import { Project } from "@/types/global"
import {
  Avatar,
  Button,
  Chip,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react"
import dayjs from "dayjs"
import { signOut, useSession } from "next-auth/react"
import Logo_Project from "/public/logo_project.png"
import ImageWithBlur from "@/components/Image"

const DashboardContainer = ({ projects }: { projects: Project[] }) => {
  console.log({ projects })

  const bottomContent = React.useMemo(() => {
    return (
      <>
        <div className="py-2 px-2 flex justify-between items-center">
          <span className="w-[30%] text-small text-default-400">
            {true ? "All items selected" : `${5} of ${30} selected`}
          </span>
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={1}
            total={5}
            onChange={() => null}
          />
          <div className="hidden sm:flex w-[30%] justify-end gap-2">
            <Button size="sm" variant="flat">
              Previous
            </Button>
            <Button size="sm" variant="flat">
              Next
            </Button>
          </div>
        </div>
      </>
    )
  }, [])
  return (
    <div className="min-h-[calc(100vh-17rem)] dark:bg-deep-back bg-white rounded-2xl p-3">
      <Table
        className="max-h-[calc(100vh-20rem)] overflow-auto"
        bottomContent={bottomContent}
        color="success"
        selectionMode="multiple"
        defaultSelectedKeys={[]}
        aria-label="Example static collection table"
        removeWrapper
      >
        <TableHeader>
          <TableColumn>Project</TableColumn>
          <TableColumn>Last assessed</TableColumn>
          <TableColumn>License use</TableColumn>
        </TableHeader>
        <TableBody>
          {/* <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow> */}
          {projects.map((project, index) => {
            return (
              <TableRow key={project.id}>
                <TableCell>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full">
                      <ImageWithBlur
                        className="transition-transform"
                        src={Logo_Project}
                        alt="logo-project"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      {project.project_name}
                      <div className="text-xs text-text-secondary">
                        {project.project_domain}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-text-secondary">
                  {project.last_accessed
                    ? dayjs(project.last_accessed).format("DD MMM YYYY")
                    : "-"}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Chip
                      color="success"
                      variant="flat"
                      startContent={
                        <div className="w-2 h-2 rounded-full bg-success-500 ml-2 animate-pulse"></div>
                      }
                    >
                      Active
                    </Chip>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default DashboardContainer
