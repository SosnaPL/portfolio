import './style.scss'
import LottieWrapper from './../lottieWrapper'
import Profile from '../../public/profile.json'
import Experience from './experience'

export const About = () => {
  return (
    <div className="flex flex-col justify-center gap-5 px-0 sm:px-10 md:px-20 xl:px-40">
      <h1 className="flex justify-center md:justify-start text-5xl sm:text-6xl md:text-7xl font-black">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row gap-5 text-neutral-300">
        <div className="flex justify-center w-full md:w-60">
          <LottieWrapper lottie={Profile} className="flex justify-center w-1/2 md:w-60" />
        </div>
        <div className="flex justify-center">
          <span className="flex justify-center items-center font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
            Programmer who loves the concept of blockchain and web3, eager for knowledge. I also
            like cats, but that's another matter ;)
          </span>
        </div>
      </div>
      <Experience />
    </div>
  )
}

export default About
