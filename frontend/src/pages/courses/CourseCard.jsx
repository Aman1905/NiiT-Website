import React from 'react'
import './Courses.css'

function CourseCard (props) {
  return (
    <>
      <div className='card text-center'>
        <div className="overflow">
          <div className="card-body text-dark">
            <h2 className="card-title">{props.title}</h2>
            <img className='card-img-top' src={props.img} alt={props.title} />
            <p className="card-text text-secondary"><b style={{color: "#031b34"}}>Skills you'll gain:-</b> {props.desc}</p>
            <a href="https://forms.gle/P1Z7stoEPxLhzXuy9" target='_blank'>
            <button className="card-btn">Register Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard