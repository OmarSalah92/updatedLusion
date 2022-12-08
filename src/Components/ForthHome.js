import React from 'react'
import f1 from '../Photos/Photos/f1.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ForthHome =()=> {
  
    return ( <div className=' merry row  '>
         <Card className="text-center frth col-lg-4 col-md-3 col-sm-3 d-flex justify-content-center">
      <Card.Body>
        <Card.Title className='txt2'>Merry</Card.Title>
        <Card.Text className='txt1'>
          Christmas 40% Off
        </Card.Text>
        <Button variant="light">Shop Now</Button>
      </Card.Body>
    </Card>
    <Card className="text-center frth2">
      <Card.Body>
        <Card.Title className='txt3'>Your Next</Card.Title>
        <Card.Text className='txt4'>
          Purchase 10% off
        </Card.Text>
        <Button variant="light">
            Shop Now
        </Button>
      </Card.Body>
    </Card>
    
  </div>
    )
  }



export default ForthHome