import { ExperienceContext, Pages } from './Experience'
import { useContext } from 'react'

type experienceTabProps = {
  to: Pages
  children: string
}

export const ExperienceTab = (props: experienceTabProps) => {
  const { view, setView } = useContext(ExperienceContext)

  return (
    <h2
      className={`experience-tab flex flex-col justify-center hover:text-gray-500 duration-150 sm:justify-start ${
        view == props.to && 'current_tab'
      }`}
      onClick={setView.bind(null, props.to)}
    >
      {props.children}
    </h2>
  )
}

export default ExperienceTab
