import React from 'react'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components'
import './app.css'


const App = () => {
  return (
    <div className='bg-gray-gradient'>
      <div>
          <Navbar />
      </div>

      <div>
        <div>
          <Hero />
        </div>
      </div>

     
      <div>
        <Stats /> 
        <Business />
        <Billing /> 
        <CardDeal /> 
        <Testimonials />
        <Clients />
        <CTA /> 
        <Footer /> 
      </div>
   

    </div>
  )
}

export default App
