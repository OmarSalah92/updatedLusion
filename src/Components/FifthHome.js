import React from 'react'
import fifth1 from '../Photos/Photos/fifth1.jpg'
import fifth2 from '../Photos/Photos/fifth2.jpg'
import fifth3 from '../Photos/Photos/fifth3.jpg'
import fifth4 from '../Photos/Photos/fifth4.jpg'
import fifth5 from '../Photos/Photos/fifth5.jpg'
import fifth6 from '../Photos/Photos/fifth6.jpg'

const FifthHome =()=>  {
  
  return (
    <div className=' container row fifth'>
      
      <div className='col-lg-6 container'>
      <img src={fifth1} className='col-lg-5 col-md-3 col-sm-3 col-4'/>
      <img src={fifth2} className='col-lg-5 col-md-3 col-sm-3 col-4'/>  
      <img src={fifth3} className='col-lg-5 col-md-3 col-sm-3 col-4'/>  
      <img src={fifth4} className='col-lg-5 col-md-3 col-sm-3 col-4'/>  
      <img src={fifth5} className='col-lg-5 col-md-3 col-sm-3 col-4'/>  
      <img src={fifth6} className='col-lg-5 col-md-3 col-sm-3 col-4'/>      
          
          
          
       </div>
      <div className=' vint col-lg-5 col-md-3 col-sm-3 col-3'><h1 className='style'>Vintage Style</h1>
      <p className='par'>lorem lipsum is simply dummy text of the printing and typesetting industryLorem lipsum has been the industry's standard dummy text over since the 1500s.when an unknown printer</p>

      <h1 className='theme'>#LusionTheme</h1>
      
      
      
      </div>
      
      
      
      </div>
  )
}


export default FifthHome
