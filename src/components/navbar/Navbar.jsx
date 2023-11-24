import {React, useState} from 'react'
import {close, logo, menu} from '../../assets'
import {navlinks} from '../../constants'
import {TfiAlignRight, TfiClose} from 'react-icons/tfi'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={logo} alt="logo" />
      </div>

      <div className='app__navbar-links'>
        <ul className='app__navbar-links_content'>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#aboutUs">About Us</a></li>
          <li><a href="#solution">Solution</a></li>
        </ul>



      </div>

      {toggleMenu ? 
        <TfiClose className='app__navbar-links_smallscreen' style= {{marginRight:'1rem', height:'20px'}}onClick={() => !setToggleMenu(false)}/>
        :
        <TfiAlignRight className='app__navbar-links_smallscreen' onClick={() => !setToggleMenu(true)}/>
      }

          
          {toggleMenu && (
            <div className='app__navbar-links_smallscreen_content'>
              <li><a href="#home" onClick={() => !setToggleMenu(false)}>Home</a></li>
              <li><a href="#features" onClick={() => !setToggleMenu(false)}>Features</a></li>
              <li><a href="#aboutUs" onClick={() => !setToggleMenu(false)}>About Us</a></li>
              <li><a href="#solution" onClick={() => !setToggleMenu(false)}>Solution</a></li>
            </div>
          )}

    </div>

    
  )
}

export default Navbar
