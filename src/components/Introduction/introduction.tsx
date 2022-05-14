import './style.scss'
import { ParticlesRenderer } from './../Particles/particles'
import { Description } from './description'
import LottieWrapper from '../lottieWrapper'
import Coding from '../../public/coding.json'

export const Introduction = () => {
  return (
    <>
      <ParticlesRenderer />
      <Description />
      <LottieWrapper lottie={Coding} className={'absolute lg:w-full xl:w-3/4 top-0 right-0'} />
    </>
  )
}

export default Introduction
