export type LottieWrapperInfo = {
  lottie: any
  className?: string
}

export type IconInfo = LottieWrapperInfo & {
  name: string
  href: string
  isSvg?: boolean
}

export type NavbarElementInfo = {
  id: string
  name: string
}

export type EducationInfo = {
  name: string
  date: string
  source?: string
  href?: string
}

export type ProjectInfo = {
  title: string
  description: string
  technologies: string[]
  repository?: string
  website?: string
}
