import React, {useState} from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <header>
      <nav className='main-nav'>
        <div className='logo'>
        <NavLink to='/'><img src={logo} alt='logo' /></NavLink>
        </div>

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/feedback'>Feedback</NavLink></li>
          </ul>
        </div>
        
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header