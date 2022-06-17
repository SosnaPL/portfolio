import { IconProps } from 'components/icon'
import { NavbarElementProps } from 'components/Navbar/navElement'
import Github from 'public/github.json'
import LinkedIn from 'public/linkedin.json'

type Education = {
  name: string
  date: string
}

export const jobPositions: string[] = ['Web Developer', 'Designer', 'Content Writer']

export const navigationElements: NavbarElementProps[] = [
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

const socialIconClass = 'h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-500'

export const socialIcons: IconProps[] = [
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

export const skills: string[] = [
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

export const education: Education[] = [
  {
    name: 'Engineer of IT',
    date: 'September 2015 - April 2019'
  },
  {
    name: 'React from scratch - strefakursów.pl',
    date: 'January 2021'
  },
  {
    name: 'Web SPA applications with React and Flux - Altkom Akademia',
    date: 'September 2021'
  },
  {
    name: 'Junior Software Developer - HusariaSolutions',
    date: 'May 2022 - Present'
  }
]
