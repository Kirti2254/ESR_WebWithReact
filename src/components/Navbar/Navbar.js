import React from 'react'
import '../Navbar/Navbar.css'
import Photo from '/Users/USER/Desktop/React JS/website-react-app/src/images/esrlogo.png'
// import Photo from '/Users/USER/Desktop/React JS/website-react-app/src/images/'

const Navbar = () => {
  return (
    <>
      <div className='nav_bar'>
      <div className='logo'>
        <img src={Photo}  alt="logo"></img>
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