export interface Project {
  id: number
  project_name: string
  project_domain: string
  last_accessed: string
  license_use: LicenseUse[]
}

export interface LicenseUse {
  license_type: string
  libraries: string[]
}
