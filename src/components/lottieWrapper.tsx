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

  document.addEventListener('visibilitychange', () => {
    document.visibilityState == 'hidden' ? pause() : play()
  })

  return View
}

export default LottieWrapper
