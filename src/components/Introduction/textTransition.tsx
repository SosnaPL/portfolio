import TextTransition, { presets } from 'react-text-transition'
import { useEffect, useState } from 'react'

const TEXTS = ['Web Developer', 'Designer', 'Content Writer']

export const TransitioningText = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1800)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className="flex flex-col gap-2 justify-center">
      <span className="text-left text-gray-500 font-semibold text-sm sm:text-lg">
        WELCOME TO MY WORLD
      </span>
      <h1 className="flex flex-col gap-1 text-4xl sm:gap-2 sm:text-5xl md:text-7xl font-black">
        Hi, I'm Jacob
        <TextTransition
          className="text-blue-800"
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.gentle}
        />
      </h1>
    </div>
  )
}

export default TransitioningText
