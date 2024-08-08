import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/App.css'
import NavBar from './components/NavBar'
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 200,
      once: false,
    });
    AOS.refresh();
  }, [])

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
