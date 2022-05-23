import Introduction from '../../components/Introduction/introduction'
import { About } from '../../components/About/about'
import { Work } from '../../components/Work/work'
import ScrollSpy from 'react-ui-scrollspy'
import { useEffect } from 'react'
import { navigationElements } from '../../components/constants'

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
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetBottom={200}>
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
