import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import ParticlesOptions from 'assets/particles.json'
import { Engine } from 'tsparticles-engine'

export const ParticlesRenderer = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main)
  }

  return (
    <Particles
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
      options={ParticlesOptions as any}
      init={particlesInit}
    />
  )
}

export default ParticlesRenderer
