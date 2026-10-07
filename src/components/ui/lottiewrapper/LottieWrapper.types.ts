import type { UseLottieOptions } from 'lottie-react'

export type LottieAnimationData = Extract<UseLottieOptions['src'], object>

export type LottieWrapperProps = {
  lottie: LottieAnimationData
  className?: string
  label?: string
}
