import './style.scss'
import { ParticlesRenderer } from './../Particles/particles'
import { TransitioningText } from './textTransition'

export const Introduction = () => {
  return (
    <>
      <ParticlesRenderer />
      <TransitioningText />
    </>
  )
}

export default Introduction
