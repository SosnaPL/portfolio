import { useEffect, useState } from 'react'
import ScrollSpy from 'react-ui-scrollspy'

import { About } from 'components/about/About'
import Introduction from 'components/introduction/Introduction'
import { Work } from 'components/work/Work'
import { navigationElements } from 'utils/Constants'
import { Section } from './../components/Section'

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
        <Section id="home" className="flex relative" isMounted={isMounted}>
          <Introduction />
        </Section>
        <Section id="about" className="bg-neutral-900" isMounted={isMounted}>
          <About />
        </Section>
        <Section id="work" className="flex flex-col" isMounted={isMounted}>
          <Work />
        </Section>
      </ScrollSpy>
    </div>
  )
}

export default Main
