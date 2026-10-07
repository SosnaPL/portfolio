import loaderAnimation from '@/assets/loader.json'
import LottieWrapper from '@/components/ui/lottiewrapper/LottieWrapper'

export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-paper" role="status" aria-label="Loading portfolio">
      <LottieWrapper
        lottie={loaderAnimation}
        className="h-52 w-52"
        label="Loading"
      />
    </div>
  )
}
