import './style.scss'
import { Progress } from './progress'
import VisibilitySensor from 'react-visibility-sensor'

const progressDetails = ['Performance', 'Accessibility', 'Best Practices', 'SEO']

export const Work = () => {
  return (
    <div className="flex flex-col justify-center gap-10 px-0 sm:px-10 md:px-20 xl:px-40">
      <h1 className="flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl font-black">
        My Work
      </h1>
      <div className="flex gap-4 sm:gap-10 justify-center">
        <VisibilitySensor>
          {({ isVisible }) => {
            return progressDetails.map((title, key) => {
              return <Progress key={key} title={title} />
            })
          }}
        </VisibilitySensor>
      </div>
    </div>
  )
}

export default Work
