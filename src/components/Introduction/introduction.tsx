import './style.scss'
import { ParticlesRenderer } from './../Particles/particles'
import { TransitioningText } from './textTransition'
import Me from '../../public/me.png'

console.log(Me)

export const Introduction = () => {
  return (
    <div>
      <section
        id="intro"
        className="flex align-center relative bg-right bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${Me})` }}
      >
        <ParticlesRenderer />
        <TransitioningText />
      </section>
      <section>asdasd</section>
    </div>
  )
}

export default Introduction
