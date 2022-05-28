import { ParticlesRenderer } from './../Particles/particles'
import { Description } from './description'
import Coding from '../../public/coding.json'
import LottieWrapper from '../lottieWrapper'

export const Introduction = () => {
  return (
    <>
      <ParticlesRenderer />
      <Description />
      <LottieWrapper lottie={Coding} className={'absolute w-fit bottom-0 right-0'} />
    </>
  )
}

export default Introduction
