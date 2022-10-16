import React from 'react'
import ServiceList from './ServiceList'
import ServiceCard from './ServiceCard'
import './Service.css'

const Service = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="section-heading title-style padding-25px-bottom sm-padding-15px-bottom">
            <h1 className='page__title text-center'>Our <span style={{color:"var(--color-subtext)"}}>Services</span></h1>
            <h3 className="width-55 sm-width-75 xs-width-95 text-center mb-3" style={{color: "#fff"}}>Services we offer under <strong style={{color: "#86bc42"}}>Student Development Program</strong></h3>
          </div>
          
          <div className="row mt-60">
            {ServiceList.map((item) => {
              return(
                <div className="col-lg-4 col-md-6 margin-30px-bottom xs-margin-20px-bottom" key={item.id}>
                  <ServiceCard
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

export default Service