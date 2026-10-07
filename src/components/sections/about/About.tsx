import Reveal from '@/components/ui/reveal/Reveal'

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-panel/50">
      <Reveal className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:py-32">
        <div>
          <p className="font-mono text-[10px] font-medium tracking-[.16em] text-muted">01 - ABOUT</p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5.5vw,4.7rem)] font-semibold leading-[.99] tracking-[-.07em]">
            Good software
            <br />
            <span className="text-forest">feels simple.</span>
          </h2>
        </div>
        <div>
          <p className="text-2xl leading-9">
            I&apos;m a software developer focused on front-end development.
          </p>
          <p className="mt-6 leading-7 text-muted">
            Designing responsive websites that are fast, simple to use, and constructed according to
            best practices creating
            small and medium-sized web applications using different technologies. 
          </p>
        </div>
      </Reveal>
    </section>
  )
}
