import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import {Link, useNavigate, useParams} from'react-router-dom'
import axios from 'axios';

const EditProduct = (props) => {

    const{productt} = useParams()
    console.log(productt);
  const [edProduct,setEdProduct] =useState({})
  const [productName,setProductName] =useState('')
  const [productPrice,setProductPrice]=useState('')
  const[productImage,setProductImage]=useState('')
  const[productItems,setProductItems]=useState('')
  const navigate = useNavigate()
    useEffect(()=>{
        axios({
            method:'get',
            url:`http://localhost:9000/products/${productt}`
        }).then((product)=>{
           setEdProduct((product.data));
        })
    },[])

    const FormSubmit6=(e)=>{
        e.preventDefault();
        axios({
            method:'put',
            url:`http://localhost:9000/products/${productt}`,
            data:{productName:productName,
                productPrice:productPrice,
                productImage:productImage,
            productItems:productItems} 
        })
        navigate('/products')
        
    }

  return (
    <div className='signForm' >
      
    <div className='signup shadow p-3 mb-5 bg-body rounded'  pill='true' >
        <h1 className='signin' >Edit Product</h1>
<Form  onSubmit={FormSubmit6}>
<Form.Group className="mb-3" controlId="formBasicFirstName">
<Form.Label className={'signin'}>Product Name</Form.Label>
<Form.Control type="text" placeholder={edProduct.productName}  value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicSecondName">
<Form.Label className={'signin'}>Product Price</Form.Label>
<Form.Control type="number" placeholder={edProduct.productPrice} value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
<Form.Label className={'signin'}>Product Items</Form.Label>
<Form.Control type="number" placeholder={edProduct.productItems} value={productItems} onChange={(e)=>{setProductItems(e.target.value)}}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className={'signin'}>Product Image</Form.Label>
<Form.Control type="text" placeholder={edProduct.productImage} value={productImage} onChange={(e)=>{setProductImage(e.target.value)}} />

</Form.Group>

<Button variant="primary" className='login'  type="submit">
Submit
</Button>

</Form>
</div>

</div>
  )
}

export default EditProduct