import { experience, skills } from '@/data/portfolio'
import Reveal from '@/components/ui/reveal/Reveal'

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24 lg:py-32"
    >
      <Reveal className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="font-mono text-[10px] font-medium tracking-[.16em] text-muted">02 - EXPERIENCE &amp; EDUCATION</p>
          <h2 className="mt-5 font-display text-[clamp(2.8rem,5.5vw,4.7rem)] font-semibold leading-[.99] tracking-[-.07em]">
            Experience
            <br />
            <span className="text-forest">&amp; toolkit.</span>
          </h2>
          <p className="mt-6 leading-7 text-muted">
            Professional roles, independent projects, and continued learning
            have shaped the way I build for the web.
          </p>
          <p className="mb-5 mt-12 font-mono text-[10px] font-medium tracking-[.16em] text-muted">TECHNOLOGIES I USE</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span className="rounded-full border border-line px-3.5 py-2.5 text-[.72rem] text-soft transition-colors hover:border-forest hover:text-forest" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {experience.map((item, index) => (
            <article
              className="grid gap-3 py-7 sm:grid-cols-[1fr_auto]"
              key={item.company}
            >
              <div className="flex gap-4">
                <span className="font-mono text-xs text-forest">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">
                    {item.role}
                  </h3>
                  <p className="text-sm text-forest">{item.company}</p>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[10px] text-muted">
                {item.dates}
              </span>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14 rounded-3xl border border-line bg-panel p-8 sm:flex sm:justify-between" delayMs={120}>
        <div>
          <p className="font-mono text-[10px] font-medium tracking-[.16em] text-forest">EDUCATION</p>
          <h3 className="mt-3 font-display text-xl font-bold">
            Engineer of Information Technology
          </h3>
          <p className="text-sm text-muted">September 2015 - April 2019</p>
        </div>
        <p className="mt-5 text-sm leading-7 text-muted sm:mt-0">
          React from scratch - StrefaKursów, Jan 2021
          <br />
          React &amp; Flux - Altkom Akademia, Sep 2021
        </p>
      </Reveal>
    </section>
  )
}
