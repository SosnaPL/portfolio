import Introduction from '../../components/Introduction/introduction'
import { About } from '../../components/About/about'
import { Work } from '../../components/Work/work'
import ScrollSpy from 'react-ui-scrollspy'

export const Main = () => {
  return (
    <div className="main">
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetBottom={200}>
        <section id="home" className="flex relative">
          <Introduction />
        </section>
        <section id="about" className="bg-neutral-900">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
      </ScrollSpy>
    </div>
  )
}

export default Main
