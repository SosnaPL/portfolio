import SectionContainer from 'components/SectionContainer'
import { githubList, progressCircles } from 'Constants'
import GithubCalendar from './GithubCalendar'
import ProgressCircle from './ProgressCircle'
import Technologies from './Technologies'

export const Work = () => {
  return (
    <SectionContainer title="My Work">
      <div className="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-0 sm:gap-x-10 sm:gap-y-0 justify-center">
        {progressCircles.map((circle) => (
          <ProgressCircle key={circle.title} {...circle} />
        ))}
      </div>
      <div className="flex flex-col xl:flex-row gap-y-6 justify-center items-center flex-grow">
        <div className="flex flex-col items-center justify-between gap-10 w-full xl:w-1/2">
          {githubList.map((github) => (
            <div
              key={github.title}
              className="flex flex-col w-full justify-center items-center gap-5"
            >
              <span className="text-neutral-300 flex text-2xl sm:text-3xl md:text-4xl font-black">
                {github.title}
              </span>
              <GithubCalendar username={github.username} />
            </div>
          ))}
        </div>
        <div className="technologies flex relative w-full md:w-1/2 justify-center items-center">
          <Technologies />
        </div>
      </div>
    </SectionContainer>
  )
}

export default Work
