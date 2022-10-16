import React from 'react'
import './Service.css'

function ServiceCard (props) {
  return (
    <>
        <div className="service-block4 h-100">
            <div className="service-icon"><i className="icon-tools"></i></div>
            <div className="service-desc">
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    </>
  )
}

export default ServiceCard