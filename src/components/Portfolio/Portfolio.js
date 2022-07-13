import React from 'react'
import './Portfolio.css'
import Samsung9 from '/Users/USER/Desktop/React JS/website-react-app/src/images/Samsung Galaxy S9.png'
import SamsungGalaxys92 from '/Users/USER/Desktop/React JS/website-react-app/src/images/Samsung Galaxy S92.png'
import MacBook from '/Users/USER/Desktop/React JS/website-react-app/src/images/Mockup2.png'
import iphoneX from '/Users/USER/Desktop/React JS/website-react-app/src/images/iPhone X.png'
import Mockup from '/Users/USER/Desktop/React JS/website-react-app/src/images/Mockup.png'
import Mockupro from '/Users/USER/Desktop/React JS/website-react-app/src/images/Macbook Pro.png'
export const Portfolio = () => {
  return (
    <div>
        <section className='section-portfolio'>
            <div className='section-portfolio-header'>
                <h2 className='section-portfolio-header-content'>Portfolio</h2>
                <p className='section-portfolio-header-paragraph'>The Contents</p>
            </div>
            <div className='portfolio-box-container'>
                <div className='portfolio-box'>
                    <div className='portfolio-box1'>
                    <div className='portfolio-box-content'>
                       <img src={iphoneX} alt="Photo"/>
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
                <img src={Samsung9} alt="Photo"/>
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
                <img src={MacBook} alt="Photo"/>
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
                       <img src={iphoneX} alt="Photo"/>
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
                <img src={Samsung9} alt="Photo"/>
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
                <img src={MacBook} alt="Photo"/>
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
  )
}
