import { useInView } from 'react-intersection-observer'
import { CSSTransition } from 'react-transition-group'

import { SectionContainer } from 'components/SectionContainer'
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
    <SectionContainer title="My projects">
      <div ref={ref} className="flex flex-wrap justify-center gap-6">
        {projectsList.map((project, key) => (
          <CSSTransition
            in={inView}
            key={project.title}
            timeout={700 + key * 200}
            mountOnEnter
            classNames={{
              enter: '-translate-y-10 translate-x-0 lg:translate-y-0 lg:-translate-x-10 opacity-0',
              enterActive: `opacity-100 translate-y-0 lg:translate-x-0 transition-all duration-700 ${getClassByDelay(
                key * 200
              )}`,
              enterDone: 'hover:-translate-y-1 transition-all duration-150 cursor-pointer'
            }}
          >
            <Project {...project} />
          </CSSTransition>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects
