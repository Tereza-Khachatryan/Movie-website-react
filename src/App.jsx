import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css'
import "./App.scss"
import Banner from "./Components/Banner.jsx"
import Header from "./Components/Header"
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'
import BackToTopBtn from './Components/BackToTopBtn.jsx'

function App() {
  
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })

        return () => {
          window.removeEventListener('scroll', () => {
            setScroll(window.scrollY)
          })
        }
    }, [scroll])

  return (
    <>
      <Header scroll={scroll}/>
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn  scroll={scroll}/>
    </>
  )
}

export default App
