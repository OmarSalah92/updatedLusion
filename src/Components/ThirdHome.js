import React, { useState }  from 'react'
import Card from 'react-bootstrap/Card';
import t1 from '../Photos/Photos/t1.jpg'
import t2 from '../Photos/Photos/t2.jpg'
import t3 from '../Photos/Photos/t3.jpg'
import t4 from '../Photos/Photos/t4.jpg'
import Button from 'react-bootstrap/Button';
import { FaCartPlus } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
const ThirdHome=(props)=>  {

  



    return (
  
      props.products1.map((n)=>(
        <div  key={n.id} className='col-lg-4 col-md-3 col-sm-3 d-flex justify-content-center thrd '>
            <Card style={{ width: '17rem' }} >
          <Card.Img variant="top" src={n.img}  />
          <Card.Body>
            <Card.Title>{n.name}</Card.Title>
            <Card.Text>
             ${n.price}
            </Card.Text>
            <Button variant="light" onClick={()=>props.y(n)} >
            <FaCartPlus/>
            </Button>
          </Card.Body>
        </Card>
          </div>
          
    
          
            ))
            


       
    )
  }



export default ThirdHome