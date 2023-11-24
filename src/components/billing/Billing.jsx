import React from 'react'
import './billing.css'
import { bill, apple, google } from '../../assets'

const Billing = () => {
  return (
    <div className='app__billing'>
      <div className='app__billing-image'>
        <img src={bill} alt="bill" />
      </div>

      <div className='app__billing-content'>
       
        <h1>Easily control your billing & invoicing.</h1>
        <p>Experience seamless financial management with our intuitive online platform. Streamline your billing and invoicing processes effortlessly, ensuring precision and efficiency. Take charge of your finances with our user-friendly tools, tailored to simplify your banking experience.</p>
  

        <div className='app__billing-content-stores'>
          <img src={apple} alt="apple store" />
          <img src={google} alt="google store" />
        </div>

      </div>

    </div>
  )
}

export default Billing
