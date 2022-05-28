import LottieWrapper from 'components/lottieWrapper'
import { LottieWrapperProps } from 'components/lottieWrapper'

export interface IconProps extends LottieWrapperProps {
  name: string
  href: string
}

export const Icon = ({ name, href, lottie, className }: IconProps) => {
  return (
    <a aria-label={name} href={href} target="_blank">
      <LottieWrapper lottie={lottie} className={className} />
    </a>
  )
}

export default Icon
