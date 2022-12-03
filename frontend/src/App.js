import React from 'react'
import './App.css'
import {Header} from './components'
import {Home, Courses, Contact, Service, Java} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='gradient__bg'><Header /></div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/services' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/courses/java' element={<Java/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App