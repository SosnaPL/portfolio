import LottieWrapper from 'components/LottieWrapper'
import { IconInfo } from 'types'
import Show from 'utils/Show'

export const Icon = (props: IconInfo) => {
  return (
    <a aria-label={props.name} href={props.href} rel="noreferrer" target="_blank">
      <Show
        when={!props.isSvg}
        fallback={<img src={props.lottie} alt="social icon" className={props.className} />}
      >
        <LottieWrapper lottie={props.lottie} className={props.className} />
      </Show>
    </a>
  )
}

export default Icon
