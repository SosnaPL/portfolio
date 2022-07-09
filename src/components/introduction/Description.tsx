import { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import { CSSTransition } from 'react-transition-group'

import Icon from 'components/Icon'
import { jobPositions, socialIcons } from 'Constants'
import 'styles/transitions.scss'
import Show from 'utils/Show'

export const Description = () => {
  const [index, setIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1800)
    setIsMounted(true)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className="flex flex-col gap-2 justify-center w-full z-20">
      <CSSTransition in={isMounted} timeout={1000} classNames="description">
        <Show when={isMounted}>
          <span className="text-left text-gray-400 font-extrabold text-sm sm:text-lg">
            {'WELCOME TO MY WORLD'}
          </span>
        </Show>
      </CSSTransition>
      <CSSTransition in={isMounted} timeout={1000} classNames="description">
        <Show when={isMounted}>
          <h1 className="flex flex-col gap-1 text-4xl sm:gap-2 sm:text-5xl md:text-7xl font-black z-50">
            <span className="z-10">{`Hi, I'm Jacob`}</span>
            <TextTransition
              className="text-blue-500 w-full"
              text={jobPositions[index % jobPositions.length]}
              springConfig={presets.gentle}
            />
          </h1>
        </Show>
      </CSSTransition>
      <CSSTransition in={isMounted} timeout={2000} classNames="icons">
        <Show when={isMounted}>
          <div className="flex items-center pt-6 sm:pt-8 md:pt-10 gap-2 sm:gap-5">
            {socialIcons.map((icon, key) => (
              <Icon key={key} {...icon} />
            ))}
          </div>
        </Show>
      </CSSTransition>
    </div>
  )
}

export default Description
