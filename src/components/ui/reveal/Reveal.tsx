import { useEffect, useRef, useState } from 'react'
import type { RevealProps } from './Reveal.types'

export default function Reveal({
  children,
  className = '',
  delayMs = 0,
  style,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -32px 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const revealStyle = {
    ...style,
    transitionDelay: `${delayMs}ms`,
  }

  return (
    <div
      ref={elementRef}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} ${className}`}
      style={revealStyle}
    >
      {children}
    </div>
  )
}
