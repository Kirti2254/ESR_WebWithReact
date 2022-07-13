import React from 'react'
import './Services.css';

const Services = () => {
  return (

    <section className="section">
        <div className="section-header">
            <h2 className='section-header-content'>What We Provide</h2>
            <p className='section-header-paragraph'>Valuable assistance to the community and particularly to <br/> the clients we serve.</p>
        </div>
        <div className="box-container">
            <div class="box">
                <div className="box-content">
                    <h2>
                        Web & Mobile
                        <br/> 
                        Development         
                    </h2>
                    <p className="box-content-details">
                        We are a leading development agency with immense design and development expertise. We build scalable websites, mobile applications, and elaborate online business services within your budget.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <h2>
                    Developers 
                        <br/> 
                        On-Demand         
                    </h2>
                    <p className="box-content-details">
                    If you need exceptional full-time developers at a cost unavailable elsewhere, we will enrich your development team by pooling the best resources worldwide.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <h2>
                    Other 
                        <br/> 
                        Services         
                    </h2>
                    <p className="box-content-details">
                    Other Services: We provide technical consulting to enterprises on cyber security, data science, machine learning and product design. We have serviced telecom, education, healthcare, energy, banking and financials sectors.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services