import Introduction from '../components/Introduction/introduction'
import { About } from './../components/About/about'
import Me from '../public/me.png'
import ScrollSpy from 'react-ui-scrollspy'

export const Main = () => {
  return (
    <div className="main">
      <ScrollSpy scrollThrottle={100} useBoxMethod={false} offsetBottom={-200} offsetTop={-200}>
        <section
          id="home"
          className="flex align-center relative bg-right bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Me})` }}
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
