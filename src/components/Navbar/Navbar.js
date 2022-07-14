import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='centerContainer'>
    <div className='wrapper'>
      <div className='containerNavbar'>
          <div className='leftNavbarLogo'>
          <img src="./images/esrlogo.png"  alt="logo"></img>
          </div>
          <div className='centerNavbar'>
          <ul className='centerNavbarul'>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
          </div>

          <div className='rightNavbar'>
          <button className='buttonNavbar'>
              Let's Talk
            </button>
          </div>
  
      </div>

    </div>
    </div>
    </>
  )
}

export default Navbar