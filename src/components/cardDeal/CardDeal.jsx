import React from 'react'
import './cardDeal.css'
import { card } from '../../assets'
import GetStarted from '../getStarted/GetStarted'

const CardDeal = () => {
  return (
    <div className='app__cardDeal'>
      <div className='app__cardDeal-content'>
        <h1>Find a better card deal in a few easy steps</h1>
        <p>Discover the perfect card for you with our hassle-free comparison tool. Unlock exclusive deals and perks effortlessly, making your credit card search a breeze.</p>
        <GetStarted />
      </div>

      <div className='app__cardDeal-image'>
        <img src={card} alt="card" />
      </div>
    </div>
  )
}

export default CardDeal
