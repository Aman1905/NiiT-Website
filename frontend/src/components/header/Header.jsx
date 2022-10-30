import React from "react"
import { NavLink } from "react-router-dom"
// import logo from "../../assets/logo.png"
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink className="navbar__brand" to="/">NiiT</NavLink>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars" style={{fontSize: "25px", color: "#fff"}}></i>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link active" to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link active" to="/courses">Courses</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link active" to="/services">Services</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link active" to="/contact">Contact</NavLink></li>
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