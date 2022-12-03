import React from 'react'
import Slider from "react-slick";
import PopCourseList from './PopCourseList';
import PopCourseCard from './PopCourseCard';
import './PopCourse.css'

const PopCourse = () => {
  return (
    <>
        <div className='container-fluid d-flex justify-align-content-center parent__card'>
            <div className='row'>
                <h1 className='page__title'>Our<span style={{color:"var(--color-subtext)"}}> Popular Courses</span></h1>
                    {PopCourseList.map((data) => {
                        return(
                            <div className='col-md-4' key={data.id}>
                                <PopCourseCard
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

export default PopCourse