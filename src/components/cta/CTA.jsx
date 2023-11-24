import React from 'react'
import GetStarted from '../getStarted/GetStarted'
import './cta.css'

const CTA = () => {
  return (
    <div className='app__CTA' id='solution'>
      <div className='app__CTA-container'>
        <div className='app__CTA-container-content'>
          <h1>Try our service now!</h1>
          <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>

        <GetStarted />
      </div>
      
    </div>
  )
}

export default CTA
