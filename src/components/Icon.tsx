import LottieWrapper from 'components/LottieWrapper'
import { IconInfo } from 'types'

export const Icon = ({ name, href, lottie, className }: IconInfo) => {
  return (
    <a aria-label={name} href={href} target="_blank">
      <LottieWrapper lottie={lottie} className={className} />
    </a>
  )
}

export default Icon
