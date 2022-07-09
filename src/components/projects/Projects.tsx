import { useInView } from 'react-intersection-observer'
import { CSSTransition } from 'react-transition-group'

import { projectsList } from 'Constants'
import 'styles/transitions.scss'
import Project from './Project'
import { SectionContainer } from 'components/SectionContainer'
import { getClassByDelay } from 'utils/getClassByDelay'

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  return (
    <SectionContainer title="My Projects">
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
    </SectionContainer>
  )
}

export default Projects
