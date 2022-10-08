import React from 'react'
import CourseList from './CourseList'
import Card from './Card'
import './Courses.css'

const Courses = () => {
  return (
    <div className='container-fluid d-flex justify-content-center parent__card'>
      <div className='row'>
          {CourseList.map((data) => {
            return(
              <div className='col-md-4' key={data.id}>
                <Card
                  img={data.img}
                  title={data.title}
                  desc={data.desc}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Courses