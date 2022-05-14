import TextTransition, { presets } from 'react-text-transition'
import { useEffect, useState } from 'react'
import { jobPositions } from '../constants'
import LottieWrapper from './../lottieWrapper'
import Github from '../../public/github.json'

export const Description = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1800)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className="flex flex-col gap-2 justify-center z-20">
      <span className="text-left text-gray-500 font-extrabold text-sm sm:text-lg">
        WELCOME TO MY WORLD
      </span>
      <h1 className="flex flex-col gap-1 text-4xl sm:gap-2 sm:text-5xl md:text-7xl font-black">
        Hi, I'm Jacob
        <TextTransition
          className="text-blue-500"
          text={jobPositions[index % jobPositions.length]}
          springConfig={presets.gentle}
        />
      </h1>
      <div className="flex items-center pt-16 gap-2">
        <LottieWrapper lottie={Github} className="h-20 w-20" />
      </div>
    </div>
  )
}

export default Description
