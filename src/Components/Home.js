import React, { useState }  from 'react'
import FirstHome from './FirstHome'
import SecondHome from './SecondHome';
import ThirdHome from './ThirdHome';
import ForthHome from './ForthHome';
import FifthHome from './FifthHome';
import t1 from '../Photos/Photos/t1.jpg'
import t2 from '../Photos/Photos/t2.jpg'
import t3 from '../Photos/Photos/t3.jpg'
import t4 from '../Photos/Photos/t4.jpg'
import Cart from './Cart';
const Home=(props)=>
 {
  
    return (
      <div >
        <FirstHome/>
        <SecondHome className='row container-fluid d-flex shop2'/>
        <div className='row container-fluid d-flex shop2 '>
        <h1 className='best'>Best Seller</h1>

        <ThirdHome products1={props.data1} y={props.add1} />
        </div>
        
        <div className='row container-fluid d-flex shop2'><ForthHome/></div>
        <FifthHome/>
        
      </div>
    )
  }


export default Home
