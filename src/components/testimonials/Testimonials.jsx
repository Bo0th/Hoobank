import React from 'react'
import { people01, people02, people03, quotes } from '../../assets'
import FeedbackCard from '../feedbackCard/FeedbackCard'
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='app__testimonials' id='aboutUs'>
      <div className='app__testimonials-head'>
        <h1>What people are saying about us</h1>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className='app__testimonials-cards'>
        <FeedbackCard name='Herman Jensen' title='Founder & Leader' image={people01} quote='Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.' />
        <FeedbackCard name='Steve Mark' title='Founder & Leader' image={people02} quote="Money makes your life easier. If you're lucky to have it, you're lucky." />
        <FeedbackCard name='Kenn Gallagher' title='Founder & Leader' image={people03} quote='It is usually people in the money business, finance, and international trade that are really rich.' />
      </div>
    </div>
  )
}

export default Testimonials
