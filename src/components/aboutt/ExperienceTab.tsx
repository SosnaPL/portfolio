import { Pages } from 'components/aboutt/Experience'

interface experienceTabProps {
  view: Pages
  setView: React.Dispatch<React.SetStateAction<Pages>>
  to: Pages
  children: string
}

export const ExperienceTab = ({ view, setView, to, children }: experienceTabProps) => {
  return (
    <h2
      className={`experience-tab flex flex-col justify-center hover:text-gray-500 duration-150 sm:justify-start ${
        view == to && 'current_tab'
      }`}
      onClick={setView.bind(null, to)}
    >
      {children}
    </h2>
  )
}

export default ExperienceTab
