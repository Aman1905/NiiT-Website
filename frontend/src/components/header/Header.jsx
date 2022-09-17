import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <NavLink exact className="navbar-brand" to="/">
                <img src={logo} alt="NiiT" className="navbar-brand" />
              </NavLink>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-0">
                  
                  <li className="nav-item">
                    <NavLink exact activeclassname="menu_active" className="nav-link" to="/">Home</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink exact activeclassname="menu_active" className="nav-link" to="/about">About</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink exact activeclassname="menu_active" className="nav-link" to="/courses">Courses</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink exact activeclassname="menu_active" className="nav-link" to="/services">Services</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink exact activeclassname="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header