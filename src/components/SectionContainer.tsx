import Show from 'utils/Show'

export const SectionContainer = (props: {
  title: string
  children: JSX.Element[] | JSX.Element
  className?: string
  icon?: string
  tooltip?: string
}) => {
  return (
    <div
      className={`flex flex-col flex-1 gap-10 px-0 sm:px-10 md:px-20 xl:px-40 ${props.className}`}
    >
      <div className="flex gap-4 items-end">
        <h1 className="flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl font-black">
          {props.title}
        </h1>
        <Show when={props.icon}>
          <img
            src={props.icon}
            alt="section icon"
            data-tip
            data-for={props.tooltip}
            className="pb-1 w-7 sm:w-10"
          />
        </Show>
      </div>

      {props.children}
    </div>
  )
}

export default SectionContainer
