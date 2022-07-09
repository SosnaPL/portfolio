import codeIconSrc from 'assets/code.svg'
import openIconSrc from 'assets/open.svg'
import { ProjectInfo } from 'types'
import Show from 'utils/Show'

export function Project(props: ProjectInfo) {
  return (
    <div className="flex flex-col bg-neutral-800 border-black border-2 shadow-xl shadow-black w-[26rem] 2xl:w-[30rem] h-56 gap-4 rounded-2xl p-4">
      <div className="flex justify-between">
        <span className="text-2xl font-bold">{props.title}</span>
        <div className="flex gap-2">
          <Show when={props.repository}>
            <a aria-label={props.title} href={props.repository} rel="noreferrer" target="_blank">
              <img
                src={codeIconSrc}
                alt="Code Icon"
                width="24"
                height="24"
                className="cursor-pointer hover:opacity-50 duration-150"
              />
            </a>
          </Show>
          <Show when={props.website}>
            <a aria-label={props.title} href={props.website} rel="noreferrer" target="_blank">
              <img
                src={openIconSrc}
                alt="Open Icon"
                width="24"
                height="24"
                className="cursor-pointer hover:opacity-50 duration-150"
              />
            </a>
          </Show>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <span className="font-semibold text-neutral-300">{props.description}</span>
        <div className="flex gap-4">
          {props.technologies.map((technology, key) => (
            <div key={key}>
              <img src={technology} alt="technology icon" width="32" height="32" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
