import './style.scss'
import { ParticlesRenderer } from './../Particles/particles'
import { TransitioningText } from './textTransition'

export const Introduction = () => {
  return (
    <div>
      <section id="intro" className="flex flex-col justify-center relative">
        <ParticlesRenderer />
        <TransitioningText />
      </section>
      <section>asdasd</section>
    </div>
  )
}

export default Introduction
