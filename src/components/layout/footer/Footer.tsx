import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const shouldShow = window.scrollY > 400
      setShowBackToTop((current) =>
        current === shouldShow ? current : shouldShow,
      )
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <>
      <footer className="border-t border-line">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <b className="font-display text-ink">JS.</b>
          <span className="text-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            © {new Date().getFullYear()} Jakub Sosiński. All rights reserved.
          </span>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full bg-forest text-black shadow-lg shadow-black/30 transition-[opacity,transform,background-color] duration-300 hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        disabled={!showBackToTop}
      >
        <ArrowUp size={19} strokeWidth={2} aria-hidden="true" />
      </button>
    </>
  )
}
