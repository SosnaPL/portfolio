export const SectionContainer = (props: {
  title: string
  children: JSX.Element[] | JSX.Element
  className?: string
}) => {
  return (
    <div
      className={`flex flex-col flex-1 gap-10 px-0 sm:px-10 md:px-20 xl:px-40 ${props.className}`}
    >
      <h1 className="flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl font-black">
        {props.title}
      </h1>
      {props.children}
    </div>
  )
}

export default SectionContainer
