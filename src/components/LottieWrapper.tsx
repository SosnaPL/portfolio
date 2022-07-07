import { useLottie } from 'lottie-react'
import { useEffect } from 'react'

import { LottieWrapperInfo } from 'types'

const LottieWrapper = (props: LottieWrapperInfo) => {
  const options = {
    animationData: props.lottie,
    loop: true,
    autoplay: true,
    className: props.className
  }

  const { View, play, pause } = useLottie(options as any)

  const onVisiblityChange = () => {
    document.visibilityState == 'hidden' ? pause() : play()
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisiblityChange)
    return () => {
      document.removeEventListener('visibilitychange', onVisiblityChange)
    }
  }, [])

  return View
}

export default LottieWrapper
