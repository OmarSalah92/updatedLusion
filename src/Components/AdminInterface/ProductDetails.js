import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {ID}=useParams()
    const [viewData,setViewData] = useState({})
    console.log(ID);

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://localhost:9000/products/${ID}`
          }).then((product)=>{
            setViewData(product.data)
          })
    },[])

  return (
    <div className='view container'>
    <h1>Product Details:</h1>
     <h3>Product Name: {viewData.productName}</h3>
     <h3> Product Price: {viewData.productPrice}</h3>
     <h3> Available Items:{viewData.productItems}</h3>
   <h3> Product Image :</h3> <img src={viewData.productImage}/>
    </div>
  )
}

export default ProductDetails