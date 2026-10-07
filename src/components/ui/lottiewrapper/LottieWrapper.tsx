import { useLottie } from 'lottie-react'
import type { LottieWrapperProps } from './LottieWrapper.types'

export default function LottieWrapper({
  lottie,
  className = '',
  label = 'Animated illustration',
}: LottieWrapperProps) {
  const { setDisplayRef } = useLottie({
    src: lottie,
    loop: true,
    autoplay: true,
  })

  return (
    <div className={'flex justify-center ' + className}>
      <div
        ref={setDisplayRef}
        className="h-full w-full"
        role="img"
        aria-label={label}
      />
    </div>
  )
}
