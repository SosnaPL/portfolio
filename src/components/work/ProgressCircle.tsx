import { useState } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { useCountUp } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export const ProgressCircle = (props: { title: string; color: string }) => {
  const [ended, setEnded] = useState(false)

  const { start } = useCountUp({
    ref: props.title,
    start: 0,
    end: 100,
    duration: 2,
    prefix: '~',
    startOnMount: false,
    onEnd: () => setEnded(true)
  })

  return (
    <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/4">
      <VisibilitySensor partialVisibility active={!ended}>
        {({ isVisible }) => {
          const visible = !ended ? isVisible : true
          if (visible && !ended) {
            start()
          }
          return (
            <div className="w-24 lg:w-40">
              <CircularProgressbarWithChildren
                value={visible ? 100 : 0}
                background={false}
                strokeWidth={12}
                styles={buildStyles({
                  pathTransitionDuration: visible ? 2 : 0,
                  pathColor: props.color,
                  trailColor: 'transparent'
                })}
              >
                <span
                  id={props.title}
                  className="text-lg sm:text-2xl lg:text-4xl font-semibold text-neutral-300"
                ></span>
              </CircularProgressbarWithChildren>
            </div>
          )
        }}
      </VisibilitySensor>
      <span className="text-neutral-300 font-semibold text-sm sm:text-lg md:text-xl lg:text-4xl text-center">
        {props.title}
      </span>
    </div>
  )
}

export default ProgressCircle
