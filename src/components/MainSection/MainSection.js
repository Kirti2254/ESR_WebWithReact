import React from 'react'
import Image from '/Users/USER/Desktop/React JS/website-react-app/src/images/Image.png'
import './MainSection.css'

const MainSection = () => {
  return (
    <div className='wrapper'>
      <div className='container-main-section'>
          <div className='left-main-section'>
            <h1 className='heading-main-section'>We Build Technology Based Solution</h1>
            <p className='paragraph-main-section'>With lots of unique blocks, you can easily build a page <br/>   without coding. Build your next website fast.</p>
            <button className='button-main-section'>
              Get a Free Proposal
            </button>
          </div>
          <div className='right-main-section'>
            <div className='hero-img'>
              <img src={Image} alt = "image"/>
            </div>
          </div>
      </div>

    </div>
  )
}

export default MainSection;