import { useLottie } from 'lottie-react'
import { useEffect } from 'react'

import { LottieWrapperInfo } from 'types'

const LottieWrapper = ({ lottie, className }: LottieWrapperInfo) => {
  const options = {
    animationData: lottie,
    loop: true,
    autoplay: true,
    className: className
  }

  const { View, play, pause } = useLottie(options as any)

  const changeVisiblity = () => {
    document.visibilityState == 'hidden' ? pause() : play()
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', changeVisiblity)
    return () => {
      document.removeEventListener('visibilitychange', changeVisiblity)
    }
  }, [])

  return View
}

export default LottieWrapper
