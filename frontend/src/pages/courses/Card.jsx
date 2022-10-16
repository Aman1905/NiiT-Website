import React from 'react'
import './Courses.css'

function Card (props) {
  return (
    <>
      <div className='card text-center'>
        <div className="overflow">
          <div className="card-body text-dark">
            <h2 className="card-title">{props.title}</h2>
            <img className='card-img-top' src={props.img} alt={props.title} />
            <p className="card-text text-secondary"><b style={{color: "#031b34"}}>Skills you'll gain:-</b> {props.desc}</p>
            {/* <h2 className="card-price">₹ 4000/-</h2> */}
            <button className="card-btn">Start Learning</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card