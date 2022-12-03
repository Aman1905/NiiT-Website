import React from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'

function CourseCard (props) {
  // const details = [
  //   {
  //     id: 1,
  //     to: `./java`,
  //     name: 'Learn More'
  //   },
  //   {
  //     id: 2,
  //     to: `./python`,
  //     name: 'Learn More'
  //   }
  // ]
  return (
    <>
      <div className='card text-center'>
        <div className="overflow">
          <div className="card-body text-dark">
            <h2 className="card-title">{props.title}</h2>
            <img className='card-img-top' src={props.img} alt={props.title} />
            <p className="card-text text-secondary"><b style={{color: "#031b34"}}>Skills you'll gain:-</b> {props.desc}</p>
            {/* {details.map(list => (
                <Link className="card-btn" to={list.to}>{list.name}</Link>
              )
            )} */}
            <a href={props.dest}>
            <button className="card-btn">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard