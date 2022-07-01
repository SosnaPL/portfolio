import { Description } from 'components/indtroductionn/Description'
import LottieWrapper from 'components/LottieWrapperr'
import { ParticlesRenderer } from 'components/Particles'
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
