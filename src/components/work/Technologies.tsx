import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { skills } from '../../utils/Constants'

const TagCloud = require('TagCloud')

export const Technologies = () => {
  const tcRef = useRef<HTMLDivElement>()
  const [tc, setTc] = useState(null)
  const { ref, inView } = useInView({
    threshold: 0
  })

  const options = {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 135,
    keep: true
  }

  useEffect(() => {
    const cloud = TagCloud(tcRef.current, skills, options)
    cloud.pause()
    setTc(cloud)
  }, [])

  useEffect(() => {
    if (tc) {
      inView ? tc.resume() : tc.pause()
    }
  }, [inView])

  return (
    <div ref={ref}>
      <div ref={tcRef} className="sm:font-bold text-sky-400"></div>
    </div>
  )
}

export default Technologies
