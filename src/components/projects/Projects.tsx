import { useInView } from 'react-intersection-observer'
import { CSSTransition } from 'react-transition-group'

import { projectsList } from 'Constants'
import 'styles/transitions.scss'
import Project from './Project'

export function Projects() {
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

  return (
    <div className="flex flex-col gap-10 px-0 sm:px-10 md:px-20 xl:px-40">
      <h1 className="flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl font-black">
        {'My Projects'}
      </h1>
      <div ref={ref} className="flex flex-wrap justify-center gap-6">
        {projectsList.map((project, key) => (
          <CSSTransition
            in={inView}
            key={key}
            timeout={1200}
            mountOnEnter
            classNames={{
              enter: '-translate-y-10 translate-x-0 sm:translate-y-0 sm:-translate-x-10 opacity-0',
              enterActive: `opacity-100 translate-y-0 sm:translate-x-0 transition-all duration-700 ${getClassByDelay(
                key * 200
              )}`,
              enterDone: 'hover:-translate-y-1 transition-all duration-150 cursor-pointer'
            }}
          >
            <Project {...project} />
          </CSSTransition>
        ))}
      </div>
    </div>
  )
}

export default Projects
