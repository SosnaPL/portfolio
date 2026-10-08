import { Code2, Globe2 } from 'lucide-react'
import type { ProjectProps } from './Project.types'

export default function Project({ project }: ProjectProps) {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-line bg-paper transition duration-200 hover:-translate-y-1 hover:border-forest/50">
      <div className="flex h-full flex-col p-6">
        <div className="flex justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-medium tracking-[.16em] text-forest">
              PERSONAL PROJECT
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold">
              {project.name}
            </h3>
          </div>

          <div className="flex shrink-0 gap-2">
            {project.repo && (
              <a
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-forest hover:text-forest"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} source code`}
              >
                <Code2 size={16} aria-hidden="true" />
              </a>
            )}
            {project.site && (
              <a
                className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-forest hover:text-forest"
                href={project.site}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} live site`}
              >
                <Globe2 size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] text-muted"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
