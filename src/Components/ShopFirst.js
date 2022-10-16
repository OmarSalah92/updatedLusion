import React from 'react'
import shop1 from '../Photos/Photos/Shop1.jpg'
const ShopFirst =()=> {
 
    return (
      <div className='shopimg d-flex flex-column'>

<img
            className="d-block w-100 "
            src={shop1}
            alt="First slide"
          />
        <h1 className='textshop'>Home/Shop</h1>
      </div>
    )
  }



export default ShopFirst