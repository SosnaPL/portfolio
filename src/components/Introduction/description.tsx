import React, { useEffect, useState } from 'react'

import { jobPositions } from '../constants'
import Github from '../../public/github.json'
import LinkedIn from '../../public/linkedin.json'
const LottieWrapper = React.lazy(() => import('./../lottieWrapper'))

import TextTransition, { presets } from 'react-text-transition'

export const Description = () => {
  const [index, setIndex] = useState(0)
  const socialIconClass = 'h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20 text-gray-500'

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1800)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className="flex flex-col gap-2 justify-center w-full z-20">
      <span className="text-left text-gray-400 font-extrabold text-sm sm:text-lg">
        WELCOME TO MY WORLD
      </span>
      <h1 className="flex flex-col gap-1 text-4xl sm:gap-2 sm:text-5xl md:text-7xl font-black z-50">
        <span className="z-10">Hi, I'm Jacob</span>
        <TextTransition
          className="text-blue-500 w-full"
          text={jobPositions[index % jobPositions.length]}
          springConfig={presets.gentle}
        />
      </h1>
      <div className="flex items-center pt-6 sm:pt-8 md:pt-10 gap-2 sm:gap-5">
        <a aria-label="Github" href="https://github.com/SosnaDev" target="_blank">
          <LottieWrapper lottie={Github} className={socialIconClass} />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/jakub-sosi%C5%84ski-954a7a19b/"
          target="_blank"
        >
          <LottieWrapper lottie={LinkedIn} className={socialIconClass} />
        </a>
      </div>
    </div>
  )
}

export default Description
