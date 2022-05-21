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

  const { View } = useLottie(options as any)

  return View
}

export default LottieWrapper
