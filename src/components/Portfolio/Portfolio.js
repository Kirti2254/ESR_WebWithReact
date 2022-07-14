import React from 'react'
import './Portfolio.css'

export const Portfolio = () => {
  return (
    <div className='centerContainer'>
        <div className='wrapper'>
        <section className='section-portfolio'>
            <div className='section-portfolio-header'>
                <h2 className='section-portfolio-header-content'>Portfolio</h2>
                <p className='section-portfolio-header-paragraph'>The Contents</p>
            </div>
            <div className='portfolio-box-container'>
                <div className='portfolio-box'>
                    <div className='portfolio-box1'>
                    <div className='portfolio-box-content'>
                       <img src="./images/iphoneX.png" alt="Photo"/>
                    </div>
                    </div>
                    <div className='portfolio-img-description'>
                    <h1 className='img-description-heading'>Jwel Trek</h1>
                    <p className='img-description-para'>Travel</p>
                </div>
                </div>
                

                <div className="portfolio-box">
                    <div className='portfolio-box2'>
                    <div className="portfolio-box-content">
                <img src="./images/samsungs9.png" alt="Photo"/>
                </div>
                    </div>

                <div className='portfolio-img-description'>
                    <h1 className='img-description-heading'>Otis Health</h1>
                    <p className='img-description-para'>Health</p>
                </div>
            </div>

            <div className="portfolio-box">
                <div className="portfolio-box3">
                <div className="portfolio-box3-content">
                <img src="./images/macbookPro.png" alt="Photo"/>
                </div>
                </div>
                <div className='portfolio-img-description'>
                    <h1 className='img-description-heading'>EMR</h1>
                    <p className='img-description-para'>Health</p>
                </div>
            </div>

            <div className='portfolio-box'>
                    <div className='portfolio-box1'>
                    <div className='portfolio-box-content'>
                       {/* <img src={JewelTrek} alt="Photo"/> */}
                       <img src="./images/iphoneX.png" alt="Photo"/>
                    </div>
                    </div>
                    <div className='portfolio-img-description'>
                    <h1 className='img-description-heading'>Jwel Trek</h1>
                    <p className='img-description-para'>Travel</p>
                </div>
                </div>
                

                <div className="portfolio-box">
                    <div className='portfolio-box2'>
                    <div className="portfolio-box-content">
                <img src="./images/samsungs9.png" alt="Photo"/>
                </div>
                    </div>

                <div className='portfolio-img-description'>
                    <h1 className='img-description-heading'>Otis Health</h1>
                    <p className='img-description-para'>Health</p>
                </div>
            </div>

            <div className="portfolio-box">
                <div className="portfolio-box3">
                <div className="portfolio-box3-content">
                <img src="./images/macbookPro.png" alt="Photo"/>
                </div>
                </div>
                <div className='portfolio-img-description'>
                    <h1 className='img-description-heading'>EMR</h1>
                    <p className='img-description-para'>Health</p>
                </div>
            </div>
            </div>



            
        </section>
        </div>
    </div>
  )
}
