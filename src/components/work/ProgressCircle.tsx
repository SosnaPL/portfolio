import { useEffect, useRef } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { useCountUp } from 'react-countup'
import { useInView } from 'react-intersection-observer'

export const ProgressCircle = (props: { title: string; color: string }) => {
  const counterRef = useRef<HTMLSpanElement>()
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const { start } = useCountUp({
    ref: counterRef,
    start: 0,
    end: 100,
    duration: 2,
    prefix: '~',
    startOnMount: false
  })

  useEffect(() => inView && start(), [inView])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 w-1/2 sm:w-1/4">
      <div className="w-24 lg:w-40">
        <CircularProgressbarWithChildren
          value={inView ? 100 : 0}
          background={false}
          strokeWidth={12}
          styles={buildStyles({
            pathTransitionDuration: inView ? 2 : 0,
            pathColor: props.color,
            trailColor: 'transparent'
          })}
        >
          <span
            ref={counterRef}
            className="text-lg sm:text-2xl lg:text-4xl font-semibold text-neutral-300"
          ></span>
        </CircularProgressbarWithChildren>
      </div>
      <span className="text-neutral-300 font-semibold text-sm sm:text-lg md:text-xl lg:text-4xl text-center">
        {props.title}
      </span>
    </div>
  )
}

export default ProgressCircle
