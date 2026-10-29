import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoadingFallback from '@/components/ui/loadingfallback/LoadingFallback'

const About = lazy(() => import('@/components/sections/about/About'))
const Contact = lazy(() => import('@/components/sections/contact/Contact'))
const Experience = lazy(() => import('@/components/sections/experience/Experience'))
const Home = lazy(() => import('@/components/sections/home/Home'))
const Projects = lazy(() => import('@/components/sections/projects/Projects'))
const Footer = lazy(() => import('@/components/layout/footer/Footer'))
const Header = lazy(() => import('@/components/layout/header/Header'))

function PortfolioPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="min-h-screen min-w-[320px] w-full max-w-full overflow-x-clip bg-paper font-sans text-ink antialiased selection:bg-forest selection:text-black">
        <Header />
        <main className="w-full min-w-0 max-w-full">
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
