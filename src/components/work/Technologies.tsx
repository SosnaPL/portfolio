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
    const tagItems = document.querySelectorAll('.tagcloud--item')
    tagItems.forEach((item) => {
      const i = item as HTMLElement
      i.style.color = 'rgb(56, 189, 248)'
    })
  }, [])

  useEffect(() => {
    if (tc) {
      props.isVisible ? tc.resume() : tc.pause()
    }
  }, [props.isVisible])

  return <div className="tagcloud"></div>
}

export default Technologies
