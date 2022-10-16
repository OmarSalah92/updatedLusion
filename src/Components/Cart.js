
import React, { Component, useState }  from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import {AiFillWarning} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const Cart=(props)=> {
    


   
    

  return (  
  <div className=' row container-fluid d-flex shop2  '>
  {props.newProducts1.map((e)=>(
  <div key={e.id} className='col-lg-4 col-md-3 col-sm-3 d-flex justify-content-center'><div>
  <Card style={{ width: '17rem' }} >
<Card.Img variant="top" src={e.img}  />
<Card.Body>
  <Card.Title>{e.name}</Card.Title>
  <Card.Text>
   {e.price }$
  </Card.Text>
  <Card.Text>
  count: {e.count}
  </Card.Text>
  <Button variant='success' onClick={()=>props.inc1(e)}>+</Button>
  <Button variant='warning' onClick={()=>props.dec1(e)}>-</Button>
  <Button variant='danger' className='del' onClick={()=>props.del1(e)}>Del</Button>
</Card.Body>
</Card>
</div>
</div>
 ))}

{props.newProducts.map((n)=>(
  <div key={n.id} className='col-lg-4 col-md-3 col-sm-3 d-flex justify-content-center'><div   >
  <Card style={{ width: '17rem' }} >
<Card.Img variant="top" src={n.img}  />
<Card.Body>
  <Card.Title>{n.name}</Card.Title>
  <Card.Text>
   {n.price }$
  </Card.Text>
  <Card.Text>
  count: {n.count}
  </Card.Text>
  <Button variant='success' onClick={()=>props.inc(n)}>+</Button>
  <Button variant='warning' onClick={()=>props.dec(n)}>-</Button>
  <Button variant='danger' className='del' onClick={()=>props.del(n)}>Del</Button>
</Card.Body>
</Card>
</div>
</div>
 ))}


 <div className='d-flex crt mt-3'>
 <Card style={{ width: '18rem' }} className={props.newProducts1.length>0?'none':props.newProducts.length>0?'none':'warn d-flex justify-content-center' }>
  <ListGroup variant="flush">
   
 
      
    <ListGroup.Item    > <AiFillWarning/>Your Cart is Empty!</ListGroup.Item>
    
  </ListGroup>
</Card>
 <Card style={{ width: '20rem' }} className='d-flex justify-content-center'>
   <ListGroup variant="flush">
    

     
         <div className='pricetxt d-flex justify-content-center '>
    <ListGroup.Item  className='fs-4'>  <Button variant='success ' className='pricetxt d-flex justify-content-center mt-1' onClick={()=>props.total()}  >Get Total Price</Button> <div className='pricetxt'>{props.newPrice}$
    </div>
      </ListGroup.Item>
      </div>
   </ListGroup>
 </Card>
 
 
 <div className='d-flex mt-3 bn'>
    <Link to={'/Shop'} className={'Home'}>
 <Button variant='success ' className='d-flex justify-content-center '>Continue Shopping</Button>
 </Link>
 </div>
 </div>

 </div>
 
)
    
    
    
  
}

export default Cart;








// <div className='cart d-flex' >
// <div className='d-flex crt col-lg-6 col-md-3 col-sm-3  justify-content-center' >
// {props.newProducts1.map((e)=>(
//   <div key={e.id}><div   >
//   <Card style={{ width: '22rem' }} >
// <Card.Img variant="top" src={e.img}  />
// <Card.Body>
//   <Card.Title>{e.name}</Card.Title>
//   <Card.Text>
//    {e.price }$
//   </Card.Text>
//   <Card.Text>
//   count: {e.count}
//   </Card.Text>
//   <Button variant='success' onClick={()=>props.inc1(e)}>+</Button>
//   <Button variant='warning' onClick={()=>props.dec1(e)}>-</Button>
//   <Button variant='danger' className='del' onClick={()=>props.del1(e)}>Del</Button>
// </Card.Body>
// </Card>
// </div></div>
//  ))}
//  {props.newProducts.map((n)=>(
//   <div key={n.id}><div   className='col-lg-6 col-md-3 col-sm-3 d-flex justify-content-center'>
//   <Card style={{ width: '22rem' }} >
// <Card.Img variant="top" src={n.img}  />
// <Card.Body>
//   <Card.Title>{n.name}</Card.Title>
//   <Card.Text>
//    {n.price}$
//   </Card.Text>
//   <Card.Text>
//   count:{n.count}
//   </Card.Text>
//   <Button variant='success' onClick={()=>props.inc(n)}>+</Button>
//   <Button variant='warning' className='minus' onClick={()=>props.dec(n)}>-</Button>
//   <Button variant='danger' className='del' onClick={()=>props.del(n)}>Del</Button>
// </Card.Body>
// </Card>
// </div></div>
//  ))}  
  
{/* <Card style={{ width: '18rem' }} className={props.newProducts1.length>0?'none':props.newProducts.length>0?'none':'warn d-flex justify-content-center' }>
  <ListGroup variant="flush">
   
 
      
    <ListGroup.Item    > <AiFillWarning/>Your Cart is Empty!</ListGroup.Item>
    
  </ListGroup>
</Card>
</div>
 <div className='d-flex crt mt-3'>
 <Card style={{ width: '20rem' }} className='d-flex justify-content-center'>
   <ListGroup variant="flush">
    

     
         <div className='pricetxt d-flex justify-content-center'>
    <ListGroup.Item  className='fs-4'>  <Button variant='success ' className='pricetxt d-flex justify-content-center' onClick={()=>props.total()}  >Get Total Price</Button> <div className='pricetxt'>{props.newPrice}$
    </div>
      </ListGroup.Item>
      </div>
   </ListGroup>
 </Card>
 
 </div>
 <div className='d-flex mt-3 bn'>
    <Link to={'/Shop'} className={'Home'}>
 <Button variant='success ' className='d-flex justify-content-center '>Continue Shopping</Button>
 </Link>
 </div>
 </div> */}