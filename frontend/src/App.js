import React from 'react'
import './App.css'
import {Header, Footer} from './components'
import {Home, Courses, Contact, About, Service} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='gradient__bg'><Header /></div>
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