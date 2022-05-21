import { useEffect } from 'react'

const TagCloud = require('TagCloud')

export const Technologies = () => {
  const container = '.tagcloud'
  const texts = [
    '3D',
    'TagCloud',
    'JavaScript',
    'CSS3',
    'Animation',
    'Interactive',
    'Mouse',
    'Rolling',
    'Sphere',
    '6KB',
    'v2.x'
  ]
  const options = {}

  useEffect(() => {
    TagCloud(container, texts, options)
  }, [])

  return <div className="tagcloud"></div>
}

export default Technologies
