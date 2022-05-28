import { useEffect } from 'react'

import { useLottie } from 'lottie-react'

interface LottieWrapperProps {
  lottie: any
  className?: string
}

const LottieWrapper = ({ lottie, className }: LottieWrapperProps) => {
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
