import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import TextTransition, { presets } from 'react-text-transition'
import { CSSTransition } from 'react-transition-group'

import Icon from 'components/Icon'
import { jobPositions, socialIcons } from 'Constants'
import 'styles/transitions.scss'

export const Description = () => {
  const [index, setIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const getClassByDelay = (delay: number) =>
    ({
      200: 'delay-[200ms]',
      400: 'delay-[400ms]',
      600: 'delay-[600ms]',
      800: 'delay-[800ms]',
      1000: 'delay-[1000ms]'
    }[delay])

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1800)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-2 justify-center w-full z-30">
      <CSSTransition in={inView} timeout={1000} mountOnEnter classNames="description">
        <span className="text-left text-gray-400 font-extrabold text-sm sm:text-lg">
          {'WELCOME TO MY WORLD'}
        </span>
      </CSSTransition>
      <CSSTransition in={inView} timeout={1000} mountOnEnter classNames="description">
        <h1 className="flex flex-col gap-1 text-4xl sm:gap-2 sm:text-5xl md:text-7xl font-black z-50">
          <span className="z-10">{`Hi, I'm Jacob`}</span>
          <TextTransition
            className="text-blue-500 w-full"
            text={jobPositions[index % jobPositions.length]}
            springConfig={presets.gentle}
          />
        </h1>
      </CSSTransition>
      <div className="flex items-center pt-6 sm:pt-8 md:pt-10 gap-1 sm:gap-2">
        {socialIcons.map((icon, key) => (
          <CSSTransition
            in={inView}
            key={icon.name}
            timeout={1200}
            mountOnEnter
            classNames={{
              enter: 'translate-x-5 opacity-0',
              enterActive: `opacity-100 sm:translate-x-0 transition-all duration-700 ${getClassByDelay(
                key * 400
              )}`
            }}
          >
            <Icon {...icon} />
          </CSSTransition>
        ))}
      </div>
    </div>
  )
}

export default Description
