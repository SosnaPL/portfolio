import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ParticlesOptions from '../../public/particles.json'

export const ParticlesRenderer = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 40 }}
      options={ParticlesOptions as any}
      init={particlesInit}
    />
  )
}

export default ParticlesRenderer
