import React from 'react'
import CourseList from './CourseList'
import Card from './Card'
import './Courses.css'

const Courses = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-align-content-center parent__card'>
      <div className='row'>
      <h1 className='page__title text-center'>Our <span style={{color:"var(--color-subtext)"}}>Courses</span></h1>
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
    </>
  )
}

export default Courses