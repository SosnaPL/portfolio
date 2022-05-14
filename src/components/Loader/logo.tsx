import { useLottie } from 'lottie-react'
import LogoLottie from './logo.json'

const Logo = () => {
  const options = {
    animationData: LogoLottie,
    loop: true,
    autoplay: true,
    style: {
      height: '200px',
      width: '200px'
    }
  }

  const { View } = useLottie(options)

  return View
}

export default Logo
