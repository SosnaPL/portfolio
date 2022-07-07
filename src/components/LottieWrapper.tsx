import { useLottie } from 'lottie-react'
import { useEffect } from 'react'

import { LottieWrapperInfo } from 'types'
import { useInView } from 'react-intersection-observer'

const LottieWrapper = (props: LottieWrapperInfo) => {
  const { ref, inView } = useInView({
    threshold: 0
  })

  const options = {
    animationData: props.lottie,
    loop: true,
    autoplay: true,
    className: props.className
  }

  const { View, play, pause } = useLottie(options as any)

  useEffect(() => {
    inView ? play() : pause()
  }, [inView])

  return <div ref={ref}>{View}</div>
}

export default LottieWrapper
