export type Project = {
  name: string
  description: string
  stack: string[]
  image?: string
  imageAlt?: string
  site?: string
  repo?: string
}

export type ExperienceItem = {
  role: string
  company: string
  dates: string
  description: string
}
