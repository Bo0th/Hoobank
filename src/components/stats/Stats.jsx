import React from 'react'
import './stats.css'

const Stats = () => {
  return (
    <div className='app__stats'>
      
      <div className='app__stats-card'>
        <h2>3800+</h2>
        <p className='text-gradient'>Users Active</p>
      </div>
      <p className='app__stats-p'>|</p>

      <div className='app__stats-card'>
        <h2>230+</h2>
        <p className='text-gradient'>Partner Companies</p>
      </div>
      <p className='app__stats-p'>|</p>

      <div className='app__stats-card'>
        <h2>£230M+</h2>
        <p className='text-gradient'>Transactions</p>
      </div>
      
    </div>
  )
}

export default Stats
