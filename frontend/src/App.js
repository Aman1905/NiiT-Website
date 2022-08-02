import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Courses from './pages/courses/Courses'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<Courses/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App