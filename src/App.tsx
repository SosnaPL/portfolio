import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar/navbar'
import LottieWrapper from './components/lottieWrapper'
import Loader from './public/loader.json'

const Main = React.lazy(() => import('./pages/Main/main'))

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Sosna</title>
        <meta
          name="description"
          content="Most of the projects that you will find on this website are my simple public applications/websites that I've made in the past or I'm still working on. More informations about my private projects will be added in the future."
        />
      </Helmet>
      <Navbar />
      <Router>
        <React.Suspense
          fallback={
            <div className="suspense">
              <LottieWrapper lottie={Loader} className={'h-52 w-52'} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </React.Suspense>
      </Router>
    </>
  )
}

export default App
