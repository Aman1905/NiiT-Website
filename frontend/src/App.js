import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Courses from './pages/courses/Courses'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Service from './pages/services/Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/services' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App