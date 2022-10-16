import React, { Component, useState }  from 'react'
import Naav from './Components/Naav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Card} from 'react-bootstrap'
import {Routes,Route} from 'react-router-dom'
import Shop from './Components/Shop';
import Home from './Components/Home';
import Cart from './Components/Cart';
import t1 from './Photos/Photos/t1.jpg'
import t2 from './Photos/Photos/t2.jpg'
import t3 from './Photos/Photos/t3.jpg'
import t4 from './Photos/Photos/t4.jpg'
import shopC1 from './Photos/Photos/shopC1.jpg'
import shopC2 from './Photos/Photos/shopC2.jpg'
import shopC3 from './Photos/Photos/shopC3.jpg'
import shopC4 from './Photos/Photos/shopC4.jpg'
import shopC5 from './Photos/Photos/shopC5.jpg'
import shopC6 from './Photos/Photos/shopC6.jpg'
import shopC7 from './Photos/Photos/shopC7.jpg'
import shopC8 from './Photos/Photos/shopC8.jpg'
import t5 from './Photos/Photos/t5.jpg'


const App =()=>   {
  
 
  const [products1,setProducts1]=useState([
    {id:0 , name:'Quilted Gilet with Hood',price:150.00,img:t1,count:'1'},
    {id:1 , name:'Quilted Gilet with Hood',price:110.00,img:t2,count:'1'},
    {id:2 , name:'Quilted Gilet with Hood',price:200.00,img:t3,count:'1'},
    {id:3 , name:'Quilted Gilet with Hood',price:250.00,img:t4,count:'1'}
    
   ]);
   const [products,setProducts]=useState([
    {id:0 , name:'shirt',price:200.00,img:shopC2,count:'1'},
    {id:1 , name:'shirt',price:210.00,img:shopC3,count:'1'},
    {id:2 , name:'shirt',price:250.00,img:shopC4,count:'1'},
    {id:3 , name:'shirt',price:220.00,img:shopC5,count:'1'},
    {id:4 , name:'shirt',price:230.00,img:shopC6,count:'1'},
    {id:5 , name:'shirt',price:200.00,img:t5,count:'1'},
    {id:6 , name:'Hood',price:105.00,img:shopC1,count:'1'},
    {id:7 , name:'Jeans',price:300.00,img:shopC7,count:'1'},
    {id:8 , name:'Jeans',price:320.00,img:shopC8,count:'1'},
   ])
  
const [cart1,setCart1] = useState([])
  
const [cart,setCart]=useState([])

const [price,setPrice] = useState([])
 


const add1 = (obj)=>{
 
    let Data = cart1.map((e)=>{
      if(e.id!==obj.id){
        return e
      }else {
       return e.count++;
      }
    })

    setCart1([...Data,obj])
 }

 let l = cart1.filter((e)=>{
  return isNaN(e)
 })
 
 

 
    
   
     const   add = (ob)=>{
      let Data = cart.map((n)=>{
        if(n.id!==ob.id){
          return n
        }else {
         return n.count++;
        }
      })
  
      setCart([...Data,ob])
   }
  
   let f = cart.filter((n)=>{
    return isNaN(n)
   })

       const inc1=(x)=>{
        let Data1 = products1.map((e)=>{
          if(e.id===x.id){
            e.count++;
            
          }
          return e
        })
        setProducts1(Data1)
       }
       const dec1=(y)=>{
        let Data1 = products1.map((e)=>{
          if(e.id===y.id &&e.count>0){
            e.count--;
            
          }
          return e
        })
        setProducts1(Data1)
      }
      const inc=(x)=>{
        let Data = products.map((n)=>{
          if(n.id===x.id){
            n.count++;
            
          }
          return n
        })
        setProducts(Data)
       }
       const dec=(y)=>{
        let Data = products.map((n)=>{
          if(n.id===y.id &&n.count>0){
            n.count--;
            
          }
          return n
        })
        setProducts(Data)
      

      }

      const del1 = (x)=>{
      
        let Data1=cart1.filter((e)=>{
          return e!==x
        })
       setCart1(Data1)
      }

      const del = (y)=>{
        let Data = cart.filter((n)=>{
          return n!==y
        })
        setCart(Data)
      }
       
        
      
      

      const total=()=>{
        let data = l.reduce((x,y)=>{return x+y.price*y.count},0 ) + f.reduce((e,n)=>{return e+n.price*n.count},0 )
       
      setPrice(data)
      }
        
      
           
   
       
       {
        return (
        <div className='app'>
          <Naav newProducts1={l}  newProducts={f}/>
  
          <Routes>
          <Route path='/' element={<Home data1={products1} add1={add1}/>}   />
            <Route path='/Shop' element={<Shop data={products} add={add} />} />
            <Route path='/Cart' element={<Cart newProducts1={l}  newProducts={f} newPrice={price}   inc1={inc1} dec1={dec1} inc={inc} dec={dec} del1={del1} del={del} total={total}  />} />
          </Routes>
          
        </div>
      )}
        
    
    }


export default App















// state = {
//   products1 : [
//   {id:0 , name:'Quilted Gilet with Hood',price:'$150.00',img:t1},
//   {id:1 , name:'Quilted Gilet with Hood',price:'$110.00',img:t2},
//   {id:2 , name:'Quilted Gilet with Hood',price:'$200.00',img:t3},
//   {id:3 , name:'Quilted Gilet with Hood',price:'$250.00',img:t4}],
//   products : [
//     {id:0 , name:'shirt',price:'$200.00',img:shopC2},
//   {id:1 , name:'shirt',price:'$210.00',img:shopC3},
//   {id:2 , name:'shirt',price:'$250.00',img:shopC4},
//   {id:3 , name:'shirt',price:'$220.00',img:shopC5},
//   {id:4 , name:'shirt',price:'$230.00',img:shopC6},
//   {id:5 , name:'shirt',price:'$200.00',img:t5},
//   {id:6 , name:'Hood',price:'$105.00',img:shopC1},
//   {id:7 , name:'Jeans',price:'$300.00',img:shopC7},
//   {id:8 , name:'Jeans',price:'$320.00',img:shopC8}],

//   x:{}

// 


// const add1 = (obj)=>{
//   setCart1([...cart1,obj])
  
//  }