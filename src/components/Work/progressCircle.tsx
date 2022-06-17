import { useState } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { useCountUp } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export const ProgressCircle = ({ title, color }) => {
  const [ended, setEnded] = useState(false)

  const { start } = useCountUp({
    ref: title,
    start: 0,
    end: 100,
    duration: 2,
    startOnMount: false,
    onEnd: () => setEnded(true)
  })

  return (
    <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/4">
      <VisibilitySensor partialVisibility={true} active={!ended}>
        {({ isVisible }) => {
          const visible = !ended ? isVisible : true
          const percentage = visible ? 100 : 0
          if (visible && !ended) {
            start()
          }
          return (
            <div className="w-24 lg:w-40">
              <CircularProgressbarWithChildren
                value={percentage}
                background={false}
                strokeWidth={15}
                styles={buildStyles({
                  pathTransitionDuration: visible ? 2 : 0,
                  pathColor: color,
                  trailColor: 'transparent'
                })}
              >
                <div className="text-lg sm:text-2xl lg:text-4xl font-semibold text-white">
                  ~<span id={title}></span>
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

export default ProgressCircle
