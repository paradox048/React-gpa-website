import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <div className='cta__container'>
      <div className="cta__container--text1">
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="cta__container--text2">
        <p>Register today & start exploring the endless possiblities.</p>
      </div>
      <button className="cta__container__signUpButton">
          <p>Sign up</p>
      </button>
    </div>
  )
}

export default CTA