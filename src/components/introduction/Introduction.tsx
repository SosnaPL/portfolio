import Description from './Description'
import LottieWrapper from 'components/LottieWrapper'
import ParticlesRenderer from 'components/Particles'
import Coding from 'assets/coding.json'

export const Introduction = () => {
  return (
    <>
      <ParticlesRenderer />
      <Description />
      <LottieWrapper lottie={Coding} className="absolute w-fit bottom-0 right-0" />
    </>
  )
}

export default Introduction
