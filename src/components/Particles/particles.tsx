import ParticlesOptions from 'public/particles.json'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export const ParticlesRenderer = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
      options={ParticlesOptions as any}
      init={particlesInit}
    />
  )
}

export default ParticlesRenderer
