import React from 'react'
import AboutList from './AboutList'
import AboutCard from './AboutCard'
import './About.css'

const About = () => {
  return (
    <>
    <section className='mt-4'>
        <div className="container">
          <div className="section-heading title-style padding-25px-bottom sm-padding-15px-bottom">
            <h1 className='page__title'>Our <span style={{color:"var(--color-subtext)"}}>Mission</span></h1>
            {/* <h3 className="width-55 sm-width-75 xs-width-95 text-center mb-3" style={{color: "#fff"}}>Services we offer under <strong style={{color: "#86bc42"}}>Student Development Program</strong></h3> */}
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