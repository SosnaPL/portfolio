import { useEffect } from 'react'

import { About } from 'components/aboutt/About'
import { navigationElements } from 'components/Constantss'
import Introduction from 'components/indtroductionn/Indtroduction'
import { Work } from 'components/workk/Work'

import ScrollSpy from 'react-ui-scrollspy'

export const Main = () => {
  useEffect(() => {
    const hash = window.location.hash
    Object.values(navigationElements).map((obj) => {
      if (Object.values(obj).includes(hash.split('#')[1])) {
        document.querySelector(hash).scrollIntoView()
      }
    })
  }, [])

  return (
    <div className="main">
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetBottom={400}>
        <section id="home" className="flex relative">
          <Introduction />
        </section>
        <section id="about" className="bg-neutral-900">
          <About />
        </section>
        <section id="work" className="flex flex-col">
          <Work />
        </section>
      </ScrollSpy>
    </div>
  )
}

export default Main
