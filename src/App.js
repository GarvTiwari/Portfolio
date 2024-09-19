import React from 'react'
import './index.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About/>
      <Portfolio/>
      <SocialLinks/>
     <Experience/>
     <Contact />
    </div>
  )
}

export default App