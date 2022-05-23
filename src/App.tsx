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
          content="I create effective responsive websites that are fast, easy to use, built using best practices. My main area of specialization is front-end development, i.e. creating small and medium-sized web applications."
        />
      </Helmet>
      <Router>
        <React.Suspense
          fallback={
            <div className="suspense">
              <LottieWrapper lottie={Loader} className={'h-52 w-52'} />
            </div>
          }
        >
          <Navbar />
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
