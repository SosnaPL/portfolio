import { useEffect, useState } from 'react'

import { skills } from '../../utils/Constants'

const TagCloud = require('TagCloud')

export const Technologies = (props: { isVisible: Boolean }) => {
  const [tc, setTc] = useState(null)

  const container = '.tagcloud'

  const options = {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 135,
    keep: true
  }

  useEffect(() => {
    const cloud = TagCloud(container, skills, options)
    cloud.pause()
    setTc(cloud)
  }, [])

  useEffect(() => {
    if (tc) {
      props.isVisible ? tc.resume() : tc.pause()
    }
  }, [props.isVisible])

  return <div className="tagcloud font-bold text-sky-400"></div>
}

export default Technologies
