import { Mail } from 'lucide-react'
import codingAnimation from '@/assets/coding.json'
import githubAnimation from '@/assets/github.json'
import linkedinAnimation from '@/assets/linkedin.json'
import ParticleBackground from '@/components/ui/particlebackground/ParticleBackground'
import LottieWrapper from '@/components/ui/lottiewrapper/LottieWrapper'
import Reveal from '@/components/ui/reveal/Reveal'

export default function Home() {
  return (
    <section id="home" className="relative isolate flex min-h-screen w-full items-center overflow-hidden px-6 pb-12 pt-28">
      <ParticleBackground />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-55 sm:opacity-100" aria-hidden="true">
        <div className="ml-auto h-full w-[78%] max-[767px]:w-full max-[767px]:translate-x-[4vw]">
          <LottieWrapper lottie={codingAnimation} className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-paper via-paper/90 to-paper/30 max-[767px]:from-paper/85 max-[767px]:via-paper/60 max-[767px]:to-paper/25" />
        <div className="absolute inset-0 bg-linear-to-t from-paper/40 to-transparent" />
      </div>

      <Reveal className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="font-mono text-[10px] font-medium tracking-[.16em] text-muted">
          FRONT-END DEVELOPER <span className="text-forest">/</span> POLAND
        </p>

        <h1 className="mt-8 font-display text-[clamp(3.5rem,9vw,7.5rem)] font-semibold leading-[1.02] tracking-[-.07em]">
          Thoughtful
          <br />
          <span className="text-forest tracking-[-.02em]">interfaces,</span>
          <br />
          built for people.
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-8 text-muted">
          I&apos;m Jakub, a front-end developer turning ideas into clear,
          responsive web applications with React and TypeScript.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            className="rounded-full bg-forest px-6 py-4 text-sm font-semibold text-black transition-colors hover:bg-sky-300"
            href="#projects"
          >
            Explore my projects
          </a>
          <a className="transition-colors hover:text-forest" href="mailto:sosna.software@gmail.com">
            <Mail className="mr-2 inline" size={16} />
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <a className="grid size-13.5 place-items-center overflow-hidden rounded-full transition-colors hover:text-forest" href="https://github.com/SosnaPL" target="_blank" rel="noreferrer" aria-label="GitHub">
            <LottieWrapper lottie={githubAnimation} className="size-10.5" label="GitHub" />
          </a>
          <a className="grid size-13.5 place-items-center overflow-hidden rounded-full transition-colors hover:text-forest" href="https://gitlab.com/SosnaPL" target="_blank" rel="noreferrer" aria-label="GitLab">
            <img src="/gitlab.svg" alt="" className="size-8" />
          </a>
          <a className="grid size-13.5 place-items-center overflow-hidden rounded-full transition-colors hover:text-forest" href="https://www.linkedin.com/in/jakub-sosi%C5%84ski-954a7a19b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LottieWrapper lottie={linkedinAnimation} className="size-10.5" label="LinkedIn" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
