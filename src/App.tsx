import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from 'components/navbar/Navbar'
import SuspenseLoader from './components/SuspenseLoader'

const Main = React.lazy(() => import('./pages/Main'))

export const App = () => {
  return (
    <>
      <Helmet>
        <title>{'Sosna'}</title>
        <meta
          name="description"
          content="I create effective responsive websites that are fast, easy to use, built using best practices. My main area of specialization is front-end development, i.e. creating small and medium-sized web applications."
        />
      </Helmet>
      <Router>
        <React.Suspense fallback={<SuspenseLoader />}>
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
