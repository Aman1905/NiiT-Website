import React from 'react'
import AboutList from './AboutList'
import AboutCard from './AboutCard'
import './About.css'

const About = () => {
  return (
    <>
    <section className='mt-5 mb-5'>
        <div className="container">
          <div className="section-heading title-style padding-25px-bottom sm-padding-15px-bottom">
            <h1 className='page__title'>Our <span style={{color:"var(--color-subtext)"}}>Mission</span></h1>
          </div>
          
          <div className="row mt-50">
            {AboutList.map((item) => {
              return(
                <div className="col-lg-6 col-md-6 margin-30px-bottom xs-margin-20px-bottom" key={item.id}>
                  <AboutCard
                    title={item.title}
                    desc={item.desc}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default About