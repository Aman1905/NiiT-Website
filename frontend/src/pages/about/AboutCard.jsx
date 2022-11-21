import React from 'react'
import './About.css'

function AboutCard (props) {
  return (
    <>
        <div className="about-block4 h-100">
            <div className="about-icon"><i className="fas fa-icon-tools"></i></div>
            <div className="about-desc">
                <h4>{props.title}</h4>
                <p style={{color: '#fff'}}>{props.desc}</p>
            </div>
        </div>
    </>
  )
}

export default AboutCard