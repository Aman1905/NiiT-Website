import React from 'react'
import ClientList from './ClientList'
import './Client.css'

const Client = () => {
  return (
    <>
        <section className='mt-5 mb-5'>
            <div className="container">
                <div className="section-heading title-style padding-25px-bottom sm-padding-15px-bottom">
                    <h1 className='page__title'>Our <span style={{color:"var(--color-subtext)"}}>Global Associates</span></h1>
                </div>
            
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {ClientList.map((item) => {
                        return(
                            <div className="col" key={item.id}>
                                <div className="my-card">
                                    <img src={item.src} className="my-card-img-top" alt={item.alt} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Client