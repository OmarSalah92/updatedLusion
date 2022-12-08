import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
const Dashboard = () => {

  const [dashProduct,setDashProduct]=useState([])
  const [dashUsers,setDashUsers]=useState([])
  const[dashPrice,setDashPrice]=useState([])
  const[dashFewestItems,setDashFewestItems] = useState([])
  const[dashFewestNo,setDashFewestNo] = useState(0)
  const[dashAdminNo,setDashAdminNo] = useState(0)
  const[dashUserNo,setDashUserNo] = useState(0)
  const[dashNewestMemb,setDashNewestMemb] = useState('')
  const[dashNewestMembNum,setDashNewestMembNum]=useState(0)
  useEffect(()=>{
    axios({
      method:'get',
      url:'http://localhost:9000/products'
    }).then((e)=>{
      setDashProduct(e.data.length)
     
     let x =e.data.map(r=>r.productPrice)
        setDashPrice(x)
        let y=e.data.map(n=>n.productItems)
        
        setDashFewestItems(y)
       
      let z =Math.min(...e.data.map((r=> r.productItems

      )))

      let n = e.data.filter((r)=>{
        if(r.productItems===z){
          return r
        }
      })
      let k = n.map(r=>setDashFewestNo(r.id))
       
       
      

    })
  },[])

  useEffect(()=>{
    axios({
      method:'get',
      url:'http://localhost:9000/users'
    }).then((e)=>{
      setDashUsers(e.data.length)
      let x= e.data.filter((r)=>{
        if(r.type=='admin'){
          return r
        }
      })
      let y= e.data.filter((r)=>{
        if(r.type=='user'){
          return r
        }
      })
      setDashAdminNo(x.length)
      setDashUserNo(y.length)

      let n=e.data.map((r)=>{
        return r
      })
      console.log(n);
      
    let f=n.slice(-1)
      let j =f.map(r=>setDashNewestMemb(r.firstName))
        let h =f.map(r=>setDashNewestMembNum(r.id))
    })
  },[])



  return (
    
        
        <div>
      
      <div className="row cp">
        <div className="col-2 SideBar">
        <Link to={'/products'} className={'Home'}>Products</Link>
        <Link to={'/users'} className={'Home mt-3'}>Users</Link>
        <Link to={'/dashboard'} className={'Home mt-3'}>Dashboard</Link>

        </div>
        <div className="col-10 ">
            <div className='row cp1 mt-5 '>
        <div  style={{ width: '24rem' }}  className=' card ms-5 p-2 col-10 container card1'>
  <div className="card-header fs-4 text-white">
    Products
  </div>
  <div className="card-body">
    <h5 className="card-title text-warning">You have {dashProduct} Products Available</h5>
    <h5 className="card-title ">with prices between {Math.min(...dashPrice)} $ : {Math.max(...dashPrice)} $</h5>
    <p className="card-text">The product with the fewest number of items is product no.{dashFewestNo} with {Math.min(...dashFewestItems)} only</p>
    <Link to={'/products'}>
    <Button variant="success">Manage Products</Button>
    </Link>
  </div>
</div>
<div  style={{ width: '24rem' }}  className=' card ms-3 p-2 col-10 container card1'>
  <div className="card-header fs-4 text-white">
    Users
  </div>
  <div className="card-body">
    <h5 className="card-title text-warning">You have {dashUsers} Users Registered</h5>
    <h5 className="card-title ">with {dashAdminNo} admin and {dashUserNo} users</h5>
    <p className="card-text">The newest member registered is the owner of account no.{dashNewestMembNum}  Named: {dashNewestMemb} </p>
    <Link to={'/users'}>
    <Button variant="success">Manage Users</Button>
    </Link>
  </div>
</div>
    </div>
        </div>
      </div>
    </div>
        
        
   
  )
}

export default Dashboard