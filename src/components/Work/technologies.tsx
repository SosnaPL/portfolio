import { useEffect } from 'react'
import './style.scss'

const TagCloud = require('TagCloud')

export const Technologies = () => {
  const generateLightColorHex = () => {
    let color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
    return color
  }

  const container = '.tagcloud'
  const texts = [
    'React',
    'Svelte',
    'TypeScript',
    'JavaScript',
    'CSS3',
    'HTML',
    'Bootstrap',
    'Tailwind',
    'GIMP 2'
  ]
  const options = {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
  }

  useEffect(() => {
    TagCloud(container, texts, options)
    const tagItems = document.querySelectorAll('.tagcloud--item')
    tagItems.forEach((item) => {
      let i = item as HTMLElement
      i.style.color = `${generateLightColorHex()}`
    })
  }, [])

  return <div className="tagcloud"></div>
}

export default Technologies
