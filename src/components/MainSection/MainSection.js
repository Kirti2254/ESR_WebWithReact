import React from 'react'
import './MainSection.css'

const MainSection = () => {
  return (
    <div className='centerContainer'>
    <div className='wrapper'>
      <div className='containerMainSection'>
          <div className='leftMainSection'>
            <h1 className='headingMainSection'>We Build Technology Based Solution</h1>
            <p className='paragraphMainSection'>With lots of unique blocks, you can easily build a page <br/>   without coding. Build your next website fast.</p>
            <button className='buttonMainSection'>
              Get a Free Proposal
            </button>
          </div>
          <div className='rightMainSection'>
            <div className='hero-img'>
              <img src="./images/Image.png" alt = "image"/>
            </div>
          </div>
      </div>

    </div>
    </div>
  )
}

export default MainSection;