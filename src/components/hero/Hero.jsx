import React from 'react'
import { robot } from '../../assets'
import './hero.css'

const Hero = () => {
  return (
    <div className='app__hero' id='home'>

      <div className='app__hero-content'>
        <button type='button'>GET A 20% DISCOUNT ON YOUR FIRST MONTH</button>
        <h1>The Next</h1>
        <h1 className='text-gradient'>Generation</h1>
        <h1>Payment Method</h1>
        <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.</p>
      </div>

      <div className='app__hero-image'>
        <img src={robot} alt="robot" />
      </div>
      
    </div>
  )
}

export default Hero
