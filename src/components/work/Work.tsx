import VisibilitySensor from 'react-visibility-sensor'

import { githubList } from 'components/Constants'
import GithubCalendar from './GithubCalendar'
import ProgressCircle from './ProgressCircle'
import Technologies from './Technologies'

const progressDetails = ['Performance', 'Accessibility', 'Best Practices', 'SEO']

export const Work = () => {
  return (
    <div className="flex flex-col flex-grow justify-start gap-10 px-0 sm:px-10 md:px-20 xl:px-40">
      <h1 className="flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl font-black">
        {'My Work'}
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-0 sm:gap-x-10 sm:gap-y-0 justify-center">
        {progressDetails.map((title, key) => (
          <ProgressCircle key={key} title={title} color={'hsla(207, 100%, 50%, 0.6)'} />
        ))}
      </div>
      <VisibilitySensor partialVisibility={true}>
        {({ isVisible }: { isVisible: Boolean }) => (
          <div className="flex flex-col xl:flex-row gap-y-6 justify-center items-center flex-grow">
            <div className="flex flex-col items-center justify-between gap-10 w-full xl:w-1/2">
              {githubList.map((github, key) => (
                <div key={key} className="flex flex-col w-full justify-center items-center gap-5">
                  <span className="text-neutral-300 flex text-2xl sm:text-3xl md:text-4xl font-black">
                    {github.title}
                  </span>
                  <GithubCalendar username={github.username} />
                </div>
              ))}
            </div>
            <div className="technologies flex relative w-full md:w-1/2 justify-center items-center">
              <Technologies isVisible={isVisible} />
            </div>
          </div>
        )}
      </VisibilitySensor>
    </div>
  )
}

export default Work
