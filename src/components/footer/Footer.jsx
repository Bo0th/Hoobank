import React from 'react'
import { logo, instagram, facebook, twitter, linkedin } from '../../assets'
import './footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-head'>
        <div className='app__footer-head-logo'>
          <img src={logo} alt="logo" />
          <p className='app__footer-head-logo-p'>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='app__footer-head-2'>
          <div className='app__footer-head-links'>
            <h4>Useful Links</h4>
            <p>Content</p>
            <p>How it Works</p>
            <p>Create</p>
            <p>Explore</p>
            <p>Terms & Services</p>
          </div>

          <div className='app__footer-head-community'>
            <h4>Community</h4>
            <p>Help Center</p>
            <p>Partners</p>
            <p>Suggestions</p>
            <p>Blog</p>
            <p>Newsletter</p>
          </div>

          <div className='app__footer-head-partner'>
            <h4>Partner</h4>
            <p>Our Partner</p>
            <p>Become a Partner</p>
          </div>
        </div>
        
      </div>

      <div className='app__footer-separation'>

      </div>

      <div className='app__footer-copyright'>
        <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className='app__footer-copyright-logos'>
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Footer
