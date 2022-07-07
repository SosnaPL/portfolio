import Github from 'assets/github.json'
import LinkedIn from 'assets/linkedin.json'
import { EducationInfo, IconInfo, NavbarElementInfo } from 'types'

const socialIconClass = 'h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-500'

export const jobPositions = ['Web Developer', 'Designer', 'Content Writer']

export const navigationElements: NavbarElementInfo[] = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'about',
    name: 'About'
  },
  {
    id: 'work',
    name: 'Work'
  }
]

export const socialIcons: IconInfo[] = [
  {
    name: 'Github',
    href: 'https://github.com/SosnaPL',
    lottie: Github,
    className: socialIconClass
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jakub-sosi%C5%84ski-954a7a19b/',
    lottie: LinkedIn,
    className: socialIconClass
  }
]

export const skills = [
  'ReactJS',
  'Svelte',
  'SolidJS',
  'React Native',
  'TypeScript',
  'ES5/ES6+',
  'Git',
  'CSS3',
  'SASS',
  'Bootstrap',
  'Tailwind',
  'HTML5',
  'GIMP 2',
  'VSCode'
]

export const education: EducationInfo[] = [
  {
    name: 'Engineer of IT',
    date: 'September 2015 - April 2019'
  },
  {
    name: 'React from scratch',
    source: 'strefakursów.pl',
    date: 'January 2021'
  },
  {
    name: 'Web SPA applications with React and Flux',
    source: 'Altkom Akademia',
    date: 'September 2021'
  },
  {
    name: 'Junior Software Developer',
    source: 'HusariaSolutions',
    href: 'https://www.husariasolutions.com/',
    date: 'May 2022 - Present'
  }
]

export const githubList = [
  {
    title: 'Commercial',
    username: 'SosnaDev'
  },
  {
    title: 'Personal',
    username: 'SosnaPL'
  }
]

export const progressCircles = [
  {
    title: 'Performance',
    color: 'hsla(207, 100%, 50%, 0.8)'
  },
  {
    title: 'Accessibility',
    color: 'hsla(207, 100%, 50%, 0.8)'
  },
  {
    title: 'Best Practices',
    color: 'hsla(207, 100%, 50%, 0.8)'
  },
  {
    title: 'SEO',
    color: 'hsla(207, 100%, 50%, 0.8)'
  }
]
