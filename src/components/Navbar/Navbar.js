import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from '../Button/Button';


class Navbar extends Component{
  state = {clicked :false}
handleClick = () =>{
  this.setState({clicked: !this.state.clicked})
}


  render(){
    return(
      <nav className='navbarItems'>
        {/* <h1 className='navbarLogo'>ESR Tech</h1> */}
        <div className='navbarLogo'>
        <img src="./images/esrlogo.png"  alt="logo"></img>
        </div> 
        <div className='menuIcon' onClick = {this.handleClick}>
        
              {/* <i className={this.state.clicked ? <FaTimes/> : <FaBars/>}><FaBars/>,<FaTimes/></i> */}
              {this.state.clicked ? <FaTimes /> : <FaBars/>}
              
              {/* <i classname="dallu"></i> */}
                </div>
        <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item,index) => {
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
         
        </ul>
        <Button>Let's Talk</Button>
      </nav>
    )
  }
}
export default Navbar;