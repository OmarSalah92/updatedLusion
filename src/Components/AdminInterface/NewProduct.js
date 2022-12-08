import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import {Link} from'react-router-dom'



const NewProduct = (props) => {
  return (
    <div className='signForm' >
      
    <div className='signup shadow p-3 mb-5 bg-body rounded'  pill='true' >
        <h1 className='signin' >New Product</h1>
<Form  onSubmit={props.FormSubmit5}>
<Form.Group className="mb-3" controlId="formBasicFirstName">
<Form.Label className={'signin'}>Product Name</Form.Label>
<Form.Control type="text" placeholder="Enter name of the product" value={props.productName} onChange={props.changeProductName}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicSecondName">
<Form.Label className={'signin'}>Product Price</Form.Label>
<Form.Control type="number" placeholder="Enter Product Price" value={props.productPrice} onChange={props.changeProductPrice}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
<Form.Label className={'signin'}>Product Items</Form.Label>
<Form.Control type="number" placeholder="Enter the quantity of the product" value={props.productItems} onChange={props.changeProductItems}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className={'signin'}>Product Image</Form.Label>
<Form.Control type="text" placeholder="Enter the Url of the image " value={props.productImage} onChange={props.changeProductImage} />

</Form.Group>

<Button variant="primary" className='login'  type="submit">
Submit
</Button>

</Form>
</div>

</div>
  )
}

export default NewProduct