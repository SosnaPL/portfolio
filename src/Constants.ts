import Github from 'assets/github.json'
import Gitlab from 'assets/gitlab.svg'
import LinkedIn from 'assets/linkedin.json'
import css3Icon from 'assets/technologies/css3.svg'
import djangoIcon from 'assets/technologies/django.svg'
import html5Icon from 'assets/technologies/html5.svg'
import pythonIcon from 'assets/technologies/python.svg'
import reactIcon from 'assets/technologies/react.svg'
import typescriptIcon from 'assets/technologies/typescript.svg'
import { EducationInfo, IconInfo, NavbarElementInfo, ProjectInfo } from 'types'

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
  },
  {
    id: 'projects',
    name: 'Projects'
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
    name: 'GitLab',
    href: 'https://gitlab.com/SosnaPL',
    lottie: Gitlab,
    className: socialIconClass,
    isSvg: true
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
  'Python',
  'Webpack',
  'Vite',
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

export const projectsList: ProjectInfo[] = [
  {
    title: 'Portfolio',
    description:
      'This website ;). Here you can find my personal projects, my latest work and my latest achievements.',
    technologies: [html5Icon, css3Icon, typescriptIcon, reactIcon],
    website: 'https://sosna.software/',
    repository: 'https://github.com/SosnaPL/portfolio'
  },
  {
    title: 'GenshinApps',
    description:
      'Damage calculator (with artiffacts simulator in the future) for each individual character in Genshin Impact.',
    technologies: [html5Icon, css3Icon, typescriptIcon, reactIcon],
    website: 'https://genshin-apps.com/',
    repository: 'https://gitlab.com/SosnaPL/genshinaps'
  },
  {
    title: 'MSTAG (Front-end)',
    description:
      'Tank Artillery Game with self made notifications/chat/party/friends system. No longer maintained.',
    technologies: [html5Icon, css3Icon, typescriptIcon, reactIcon, djangoIcon],
    website: 'https://mstag.netlify.app/',
    repository: 'https://github.com/SosnaPL/MSTAG-Front-End'
  },
  {
    title: 'Chess VR (Front-end)',
    description: 'Cross platform chess game that could be played on a website and in VR.',
    technologies: [html5Icon, css3Icon, typescriptIcon, reactIcon],
    repository: 'https://gitlab.com/SosnaPL/chessvr'
  },
  {
    title: 'Coub Video Creater',
    description: 'Python Script that allowed to create video compilations using CoubAPI.',
    technologies: [pythonIcon],
    repository: 'https://github.com/SosnaPL/Coub-Video-Creator'
  },
  {
    title: 'File Manager',
    description:
      'Simple file manager that allows to upload/download/delete files from a raspberry pi.',
    technologies: [html5Icon, css3Icon, typescriptIcon, reactIcon]
  }
]
