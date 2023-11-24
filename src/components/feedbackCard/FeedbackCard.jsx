import React from 'react'
import { quotes } from '../../assets'
import './feedbackCard.css'

const FeedbackCard = ({image, quote, name, title}) => {
  return (
    <div className='app__feedbackCard'>
      <img src={quotes} alt="quote img" className='app__feedbackCard-quoteImage'/>
      <p className='app__feedbackCard-p'>{quote}</p>
      <div className='app__feedbackCard-content'>
        <img src={image} alt="img" className='app__feedbackCard-personImage' />
        <div className='app__feedbackCard-content-name'>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
      
    </div>
  )
}

export default FeedbackCard
