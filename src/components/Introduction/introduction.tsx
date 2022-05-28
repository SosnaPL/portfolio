import { ParticlesRenderer } from 'components/Particles/particles'
import { Description } from 'components/Introduction/description'
import LottieWrapper from 'components/lottieWrapper'
import Coding from 'public/coding.json'

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
