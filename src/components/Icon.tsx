import LottieWrapper from 'components/LottieWrapper'
import { IconInfo } from 'types'

export const Icon = (props: IconInfo) => {
  return (
    <a aria-label={props.name} href={props.href} rel="noreferrer" target="_blank">
      <LottieWrapper lottie={props.lottie} className={props.className} />
    </a>
  )
}

export default Icon
