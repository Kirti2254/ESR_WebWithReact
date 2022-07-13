import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='nav_bar'>
      <div className='logo'>
        <img src="./images/esrlogo.png"  alt="logo"></img>
      </div>
      <div className='nav_items'>
        <ul className='nav_items_ul'>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </div>
<a href="#" class="button">Let's Talk</a>
    </div>
    </>
  )
}

export default Navbar