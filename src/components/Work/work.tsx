import React from 'react'
import './style.scss'

import { Progress } from './progress'
const Technologies = React.lazy(() => import('./technologies'))
const GithubCalendar = React.lazy(() => import('./githubCalendar'))

import VisibilitySensor from 'react-visibility-sensor'

const progressDetails = ['Performance', 'Accessibility', 'Best Practices', 'SEO']

export const Work = () => {
  return (
    <div className="flex flex-col flex-grow justify-start gap-10 px-0 sm:px-10 md:px-20 xl:px-40">
      <h1 className="flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl font-black">
        My Work
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-0 sm:gap-x-10 sm:gap-y-0 justify-center">
        {progressDetails.map((title, key) => {
          return <Progress key={key} title={title} />
        })}
      </div>
      <VisibilitySensor partialVisibility={true}>
        {({ isVisible }) => {
          return (
            <div className="flex flex-col xl:flex-row gap-y-6 justify-center items-center flex-grow">
              <div className="flex flex-col items-center justify-between gap-10 w-full xl:w-1/2">
                <div className="flex flex-col w-full justify-center items-center gap-5">
                  <span className="text-neutral-300 flex text-2xl sm:text-3xl md:text-4xl font-black">
                    Commercial
                  </span>
                  <GithubCalendar username="SosnaDev" />
                </div>
                <div className="flex flex-col w-full justify-center items-center gap-5">
                  <span className="text-neutral-300 flex text-2xl sm:text-3xl md:text-4xl font-black">
                    Private
                  </span>
                  <GithubCalendar username="SosnaPL" />
                </div>
              </div>
              <div className="technologies flex relative w-full md:w-1/2 justify-center items-center">
                <Technologies isVisible={isVisible} />
              </div>
            </div>
          )
        }}
      </VisibilitySensor>
    </div>
  )
}

export default Work
