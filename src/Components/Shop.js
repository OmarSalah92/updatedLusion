import React, { useState }  from 'react'
import ShopFirst from './ShopFirst'
import ShopSecond from './ShopSecond'
import shopC1 from '../Photos/Photos/shopC1.jpg'
import shopC2 from '../Photos/Photos/shopC2.jpg'
import shopC3 from '../Photos/Photos/shopC3.jpg'
import shopC4 from '../Photos/Photos/shopC4.jpg'
import shopC5 from '../Photos/Photos/shopC5.jpg'
import shopC6 from '../Photos/Photos/shopC6.jpg'
import shopC7 from '../Photos/Photos/shopC7.jpg'
import shopC8 from '../Photos/Photos/shopC8.jpg'
import t5 from '../Photos/Photos/t5.jpg'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const Shop=(props)=>  {
  
  
       
  
    return (
      <div>
        <ShopFirst/>
        <div className='row container-fluid d-flex shop2'>
        <ShopSecond products={props.data} x={props.add} />
        </div>
        <div className='d-flex shopbtn'>
        <Link to={'/'}><Button   className=' mt-3 '>Back Home</Button></Link>
        </div>
      </div>
    )
  }



export default Shop