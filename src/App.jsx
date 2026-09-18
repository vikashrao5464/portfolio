import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'
import ProjectDetails from './pages/ProjectDetails'

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname);

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  if (path === '/projects/snapcart') {
    return (
      <div className='font-sora scroll-smooth overflow-x-hidden'>
        <CustomCursor/>
        <ProjectDetails slug="snapcart" />
      </div>
    )
  }

  if (path === '/projects/intervai') {
    return (
      <div className='font-sora scroll-smooth overflow-x-hidden'>
        <CustomCursor/>
        <ProjectDetails slug="intervai" />
      </div>
    )
  }

  return (
    <div className='font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  )
}
