import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../Photos/Photos/logoOne.png'
import logo2 from '../Photos/Photos/logoTwo.png'
const FirstHome = ()=>{
   
   return (

    <div className="shopimg d-flex flex-column">
      <Carousel variant="dark" className="logo1">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={logo1}
            alt="First slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 logo2"
            src={logo2}
            alt="Second slide"
          />
  
       
        </Carousel.Item>
        
      </Carousel>
      </div>
   )
}

export default FirstHome


