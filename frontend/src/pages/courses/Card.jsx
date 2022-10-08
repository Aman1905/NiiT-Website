import React from 'react'
import './Courses.css'

function Card (props) {
  return (
    <>
      <div className='card text-center shadow'>
        <div className="overflow">
          <img className='card-img-top' src={props.img} alt={props.title} />
          <div className="card-body text-dark">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text text-secondary">{props.desc}</p>
            <h3 className="card-text text-secondary">₹ 4000</h3>
            <button className="btn btn-outline-success">Start Learning</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card