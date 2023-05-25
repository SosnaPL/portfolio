import { useInView } from 'react-intersection-observer'
import ReactTooltip from 'react-tooltip'
import { CSSTransition } from 'react-transition-group'

import infoIconSrc from 'assets/info.svg'
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
    <SectionContainer title="My projects" icon={infoIconSrc} tooltip="projectInfo">
      <ReactTooltip
        id="projectInfo"
        type="info"
        effect="solid"
        className="!w-80 !bg-neutral-800 shadow-xl shadow-black"
        arrowColor="rgb(38, 38, 38)"
      >
        <span className="font-semibold text-neutral-300">
          {
            'Projects that you can see below are my personal projects done during the learning period. Each subsequent project will be based on the knowledge I have gained so far, allowing for continuous self-development. Please note that I cannot share commercial projects (NDA), so not all technologies mentioned above will appear in my personal projects.'
          }
        </span>
      </ReactTooltip>
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
