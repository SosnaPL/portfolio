import { ParticlesProvider } from '@tsparticles/react'
import type { Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/react'
import type { ISourceOptions } from '@tsparticles/engine'

async function initializeParticles(engine: Engine) {
  await loadSlim(engine)
}

const options: ISourceOptions = {
  fullScreen: { enable: false },
  detectRetina: true,
  fpsLimit: 30,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        width: 3000,
        height: 3000
      }
    },
    color: { value: '#ffffff' },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: { min: 0.3, max: 3 }
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false }
    }
  },
  motion: {
    reduce: {
      value: true,
      factor: 0.4
    }
  }
}

export default function ParticleBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-65"
      aria-hidden="true"
    >
      <ParticlesProvider init={initializeParticles}>
        <Particles id="hero-particles" className="h-full w-full" options={options} />
      </ParticlesProvider>
    </div>
  )
}
