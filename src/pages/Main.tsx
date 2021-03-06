import { createContext, useEffect, useState } from 'react'
import ScrollSpy from 'react-ui-scrollspy'

import { About } from 'components/about/About'
import Introduction from 'components/introduction/Introduction'
import { Work } from 'components/work/Work'
import { navigationElements } from 'Constants'
import { Section } from './../components/Section'
import { Projects } from './../components/projects/Projects'
import { Contact } from './../components/contact/Contact'

export const MainContext = createContext(false)

export const Main = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    Object.values(navigationElements).forEach((obj) => {
      if (obj.id == hash.split('#')[1]) document.querySelector(hash).scrollIntoView()
    })
    setIsMounted(true)
  }, [])

  return (
    <div className="main">
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetBottom={400}>
        <MainContext.Provider value={isMounted}>
          <Section id="home" className="flex relative">
            <Introduction />
          </Section>
          <Section id="about" className="bg-neutral-900">
            <About />
          </Section>
          <Section id="work">
            <Work />
          </Section>
          <Section id="projects" className="bg-neutral-900">
            <Projects />
          </Section>
          <Section id="contact" className="relative">
            <Contact />
          </Section>
        </MainContext.Provider>
      </ScrollSpy>
    </div>
  )
}

export default Main
