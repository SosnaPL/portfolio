import Introduction from '../../components/Introduction/introduction'
import { About } from '../../components/About/about'
import ScrollSpy from 'react-ui-scrollspy'

export const Main = () => {
  return (
    <div className="main">
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetBottom={-200} offsetTop={-200}>
        <section
          id="home"
          className="flex items-center relative bg-right 2xl:bg-center bg-contain bg-no-repeat"
        >
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