import React from 'react'
import { airbnb, binance, coinbase, dropbox } from '../../assets'
import './clients.css'

const Clients = () => {
  return (
    <div className='app__clients'>
      <img src={airbnb} alt="airbnb" />
      <img src={binance} alt="binance" />
      <img src={coinbase} alt="coinbase" />
      <img src={dropbox} alt="dropbox" />

    </div>
  )
}

export default Clients
