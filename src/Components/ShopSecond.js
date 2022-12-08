import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import shopC1 from '../Photos/Photos/shopC1.jpg'
import shopC2 from '../Photos/Photos/shopC2.jpg'
import shopC3 from '../Photos/Photos/shopC3.jpg'
import shopC4 from '../Photos/Photos/shopC4.jpg'
import shopC5 from '../Photos/Photos/shopC5.jpg'
import shopC6 from '../Photos/Photos/shopC6.jpg'
import shopC7 from '../Photos/Photos/shopC7.jpg'
import shopC8 from '../Photos/Photos/shopC8.jpg'
import t5 from '../Photos/Photos/t5.jpg'
import {useNavigate} from 'react-router-dom'
const ShopSecond =(props)=> {
  const navigate = useNavigate()
 
  


    return (
        
        props.products.map((e)=>(
    <div  key={e.id} className='col-lg-4 col-md-3 col-sm-3 d-flex justify-content-center scndshop'>
        <Card style={{ width: '17rem' }} >
      <Card.Img variant="top" src={e.img}  />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
         ${e.price}
        </Card.Text>
        <Button variant="light" onClick={()=>props.x(e)}>
        <FaCartPlus/>
        </Button>
      </Card.Body>
    </Card>
      </div>
      

      
        ))

      
    )
  }



export default ShopSecond
