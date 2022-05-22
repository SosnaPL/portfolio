import { useCountUp } from 'react-countup'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import VisibilitySensor from 'react-visibility-sensor'
import { useState, useEffect } from 'react'

export const Progress = ({ title }) => {
  const [ended, setEnded] = useState(false)

  const { start } = useCountUp({
    ref: title,
    start: 0,
    end: 100,
    duration: 1,
    startOnMount: false,
    onEnd: ({ pauseResume }) => setEnded(true)
  })

  return (
    <div className="flex flex-col items-center gap-2 w-1/4">
      <VisibilitySensor partialVisibility={true} active={!ended}>
        {({ isVisible }) => {
          const visible = !ended ? isVisible : true
          const percentage = visible ? 100 : 0
          if (visible && !ended) {
            start()
          }
          return (
            <div className="w-12 sm:w-20 lg:w-40">
              <CircularProgressbarWithChildren
                value={percentage}
                background={false}
                styles={buildStyles({
                  pathTransitionDuration: visible ? 1.5 : 0,
                  pathColor: '#008bff',
                  trailColor: 'transparent'
                })}
              >
                <div className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white">
                  <span id={title}></span>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          )
        }}
      </VisibilitySensor>
      <span
        className={`text-neutral-300 font-semibold text-sm sm:text-lg md:text-xl lg:text-4xl text-center`}
      >
        {title}
      </span>
    </div>
  )
}

export default Progress
