import Introduction from '../../components/Introduction/introduction'
import { About } from '../../components/About/about'
import ScrollSpy from 'react-ui-scrollspy'

export const Main = () => {
  return (
    <div className="main">
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetBottom={0} offsetTop={0}>
        <section id="home" className="flex items-center relative">
          <Introduction />
        </section>
        <section id="about">
          <About />
        </section>
      </ScrollSpy>
    </div>
  )
}

export default Main
