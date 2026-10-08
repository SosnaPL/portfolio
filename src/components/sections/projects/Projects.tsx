import { projects } from '@/data/portfolio'
import Reveal from '@/components/ui/reveal/Reveal'
import Project from './project/Project'

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line bg-panel py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14">
          <p className="font-mono text-[10px] font-medium tracking-[.16em] text-forest">
            03 - PROJECTS
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5.5vw,4.7rem)] font-semibold leading-[.99] tracking-[-.07em]">
            A few things
            <br />
            <span className="text-forest">I&apos;ve made.</span>
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-muted">
            A selection of personal projects built to explore ideas and solve practical problems.
            Some client projects aren&apos;t shown because of client confidentiality.
          </p>
        </Reveal>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delayMs={index * 90} className="h-full">
              <Project project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
