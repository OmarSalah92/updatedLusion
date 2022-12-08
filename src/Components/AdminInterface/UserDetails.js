import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

const UserDetails = (props) => {
    const{ID}=useParams()
    const[viewUserData,setViewUserData]=useState({})
    const[viewRole,setViewRole]=useState('')
    const[viewFirstName,setViewFirstName]=useState('')
    const[viewSecondName,setViewSecondName]=useState('')
    const[viewEmailAddress,setViewEmailAddress]=useState('')
    const[viewPassword,setViewPassword]=useState('')
    const[viewAge,setViewAge]=useState('')
    const[viewPhoneNumber,setViewPhoneNumber]=useState('')
    
    const navigate=useNavigate()
    console.log(ID);

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://localhost:9000/users/${ID}`
        }).then((e)=>{
            setViewUserData(e.data)
            setViewRole(e.data.type)
            setViewEmailAddress(e.data.EmailAddress)
            setViewPassword(e.data.password)
            setViewFirstName(e.data.firstName)
            setViewSecondName(e.data.SecondName)
            setViewPhoneNumber(e.data.phoneNumber)
            setViewAge(e.data.Age)

      
        })
    },[])

 
    const typeChange=()=>{
        if(viewRole=='user'){
            axios({
                method:'put',
                url:`http://localhost:9000/users/${ID}`,
                data:{
                    firstName: viewFirstName,
                    SecondName: viewSecondName,
                    EmailAddress: viewEmailAddress,
                    phoneNumber: viewPhoneNumber,
                    type: "admin",
                    password: viewPassword,
                    Age: viewAge,
                    
                }
            })
        }
        navigate(`/users`)
        }
        const typeChange1=()=>{
            if(viewRole=='admin'){
                axios({
                    method:'put',
                    url:`http://localhost:9000/users/${ID}`,
                    data:{
                        firstName: viewFirstName,
                        SecondName: viewSecondName,
                        EmailAddress: viewEmailAddress,
                        phoneNumber: viewPhoneNumber,
                        type: "user",
                        password: viewPassword,
                        Age: viewAge,
                        
                    }
                })
            }
            navigate(`/users`)
            }
    
      
  

  return (
    <div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Role</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{viewUserData.type}</td>
          <td>{viewUserData.firstName}</td>
          <td>{viewUserData.SecondName}</td>
          <td>{viewUserData.EmailAddress}</td>
          <td>{viewUserData.Age}</td>
        </tr>
       
        
      </tbody>
    </Table>
    <Button  style={viewUserData.type=='admin'?{display:'none'}:{display:'block'}} variant={'secondary'} onClick={typeChange} >make an admin</Button>
    <Button  style={viewUserData.type=='user'?{display:'none'}:{display:'block'}} variant={'secondary'} onClick={typeChange1} >Delete Admin</Button>

    </div>
  )
}

export default UserDetails