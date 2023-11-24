import React from 'react'
import { star,shield,send } from '../../assets'
import './business.css'
import GetStarted from '../getStarted/GetStarted'


const Card = ({image,title, text}) => {
  return (
    <div className='app__business-card'>
      <div className='app__business-card_icon'>
        <img src={image} alt="icon" />
      </div>

      <div className='app__business-card_content'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <div className='app___business' id='features'>
      <div className='app__business-content_left'>
        <h1>You do the business, we'll handle the money.</h1>
        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <GetStarted />
      </div>


      <div className='app__business-content_right'>
        <Card image={star} title='Rewards' text='The best credit cards offer some tantalizing combinations of promotions and prizes' />
        <Card image={shield} title='100% Secured' text='We take proactive steps make sure your information and transactions are secure' />
        <Card image={send} title='Balance Transfer' text='A balance transfer credit card can save you a lot of money in interest charges' />
      </div>
    </div>
  )
}

export default Business
