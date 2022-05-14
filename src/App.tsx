import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar/navbar'
import Logo from './components/Loader/logo'

const Main = React.lazy(() => import('./pages/Main'))

export const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="keywords" content="Template" />
        <title>Template</title>
        <meta name="description" content="Template" />
      </Helmet>
      <Navbar />
      <Router>
        <React.Suspense
          fallback={
            <div className="suspense">
              <Logo />
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
