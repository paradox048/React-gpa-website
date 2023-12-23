import React from 'react'
import './Brand.css'
import './imports.js'
import { Google, Slack, Shopify, DropBox } from './imports.js'

const Brand = () => {
  return (
    <div className='gpt4__brand gpt4__sectionPadding'>
      <div>
        <img src={Google} alt="Google" />
      </div>
      <div>
        <img src={Slack} alt="Slack" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify" />
      </div>
      <div>
        <img src={DropBox} alt="DropBox" />
      </div>
    </div>
  )
}

export default Brand