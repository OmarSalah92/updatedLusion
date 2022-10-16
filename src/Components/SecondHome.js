import React from 'react'
import Card from 'react-bootstrap/Card';
import s1 from '../Photos/Photos/s1.jpg'
import s2 from '../Photos/Photos/s2.jpg'
import s3 from '../Photos/Photos/s3.jpg'
import s4 from '../Photos/Photos/s4.jpg'

const SecondHome =()=>  {
  
    return (
        <div className='container '>
        <div className=' scnd row'>
        <Card className='' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={s1} />
        <Card.Body>
          <Card.Title className='tit'> Clothing</Card.Title>
          <Card.Text>
           items 6
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={s2} />
      <Card.Body>
        <Card.Title className='tit'> Bag Brand</Card.Title>
        <Card.Text>
         items 20
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={s3} />
    <Card.Body>
      <Card.Title className='tit'> Accessiors</Card.Title>
      <Card.Text>
       items 6
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={s4} />
  <Card.Body>
    <Card.Title className='tit'> Shoes</Card.Title>
    <Card.Text>
     items 8
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
</div>
    )
  }



export default SecondHome