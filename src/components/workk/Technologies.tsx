import { useEffect, useState } from 'react'

import { skills } from '../Constantss'

const TagCloud = require('TagCloud')

export const Technologies = ({ isVisible }: { isVisible: Boolean }) => {
  const [tc, setTc] = useState(null)

  const generateLightColorHex = () => {
    let color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
    return color
  }

  const container = '.tagcloud'

  const options = {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
  }

  useEffect(() => {
    const cloud = TagCloud(container, skills, options)
    cloud.pause()
    setTc(cloud)
    const tagItems = document.querySelectorAll('.tagcloud--item')
    tagItems.forEach((item) => {
      let i = item as HTMLElement
      i.style.color = `${generateLightColorHex()}`
    })
  }, [])

  useEffect(() => {
    if (tc) {
      isVisible ? tc.resume() : tc.pause()
    }
  }, [isVisible])

  return <div className="tagcloud"></div>
}

export default Technologies
