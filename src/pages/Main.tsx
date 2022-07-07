import { useEffect } from 'react'
import ScrollSpy from 'react-ui-scrollspy'

import { About } from 'components/about/About'
import { navigationElements } from 'utils/Constants'
import Introduction from 'components/introduction/Introduction'
import { Work } from 'components/work/Work'

export const Main = () => {
  useEffect(() => {
    const hash = window.location.hash
    Object.values(navigationElements).forEach((obj) => {
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
