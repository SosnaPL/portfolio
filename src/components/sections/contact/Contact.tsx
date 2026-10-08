import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/ui/reveal/Reveal'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <Reveal className="rounded-4xl border border-line bg-panel bg-[radial-gradient(ellipse_at_100%_0%,rgb(var(--color-accent)/0.05),transparent_38%)] p-8 sm:p-14">
        <p className="font-mono text-[10px] font-medium tracking-[.16em] text-forest">
          04 - CONTACT
        </p>
        <h2 className="mt-6 font-display text-5xl font-semibold sm:text-7xl">
          Have a challenging
          <br />
          project in mind?
        </h2>
        <p className="mt-6 max-w-md leading-7 text-muted">Tell me what you're building.</p>
        <a
          href="mailto:sosna.software@gmail.com"
          className="mt-8 inline-flex items-center rounded-full bg-forest px-6 py-4 text-sm font-semibold text-black"
        >
          sosna.software@gmail.com
        </a>
      </Reveal>
    </section>
  )
}
