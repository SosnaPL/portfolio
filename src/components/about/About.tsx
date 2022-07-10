import Experience from 'components/about/Experience'
import LottieWrapper from 'components/LottieWrapper'
import Profile from 'assets/profile.json'
import { SectionContainer } from 'components/SectionContainer'

export const About = () => {
  return (
    <SectionContainer title="About me" className="gap-5">
      <div className="flex flex-col md:flex-row gap-5 text-neutral-300">
        <div className="flex justify-center w-full md:w-60">
          <LottieWrapper lottie={Profile} className="flex justify-center w-1/2 md:w-60" />
        </div>
        <div className="flex justify-center">
          <span className="flex justify-center items-center font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
            {`Software Developer who loves the concept of blockchain and web3, eager for knowledge. I
            also like cats, but that's another matter ;)`}
          </span>
        </div>
      </div>
      <Experience />
    </SectionContainer>
  )
}

export default About
