import React from 'react'
import './Home.css'
import home from '../../assets/home.png'
import { NavLink } from 'react-router-dom'
import About from '../about/About'

const Home = () => {
  return (
    <>
    {/* home section starting */}
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className='row'>
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>UpSkill Your Learning with <span className='brand-name'>NiiT</span></h1>
                <div className='mt-3'><NavLink to='/courses' className="btn-get-started">Get Started</NavLink></div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={home} className="img-fluid animated" alt='homeimg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* home section ending */}

    {/* about section starting */}
      <About />
    {/* about section starting */}
    </>
  )
}

export default Home

// //section-heading