import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import TextTransition, { presets } from 'react-text-transition'
import { CSSTransition, Transition } from 'react-transition-group'

import Icon from 'components/Icon'
import { jobPositions, socialIcons } from 'Constants'
import 'styles/transitions.scss'

export const Description = () => {
  const [index, setIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const transitionStyles = {
    entered: { opacity: 1, transform: 'translateX(0)' }
  }

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
          <Transition in={inView} timeout={500 + key * 150} key={icon.name} mountOnEnter>
            {(state) => (
              <div
                style={{
                  transition: 'all 0.5s ease-in-out',
                  transitionDelay: `${key * 150}ms`,
                  opacity: 0,
                  transform: 'translateX(20px)',
                  ...transitionStyles[state]
                }}
              >
                <Icon {...icon} />
              </div>
            )}
          </Transition>
        ))}
      </div>
    </div>
  )
}

export default Description
