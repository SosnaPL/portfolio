import { Pages } from './Experience'

type experienceTabProps = {
  view: Pages
  setView: React.Dispatch<React.SetStateAction<Pages>>
  to: Pages
  children: string
}

export const ExperienceTab = (props: experienceTabProps) => {
  return (
    <h2
      className={`experience-tab flex flex-col justify-center hover:text-gray-500 duration-150 sm:justify-start ${
        props.view == props.to && 'current_tab'
      }`}
      onClick={props.setView.bind(null, props.to)}
    >
      {props.children}
    </h2>
  )
}

export default ExperienceTab
