import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import {Link, useNavigate, useParams} from'react-router-dom'
import axios from 'axios';

const EditUsers = () => {
    const {users}=useParams()
    const[edUser,setEdUser]=useState([])
    const[editFirstName,setEditFirstName]=useState('')
    const[editSecondName,setEditSecondName]=useState('')
    const[editMail,setEditMail]=useState('')
    const[editPassword,setEditPassword]=useState('')
    const[editPhoneNumber,setEditPhoneNumber]=useState('')
    const[editRole,setEditRole]=useState('')
    const[editAge,setEditAge]=useState('')
    const[error,setError]=useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        axios({
            method:'get',
            url:`http://localhost:9000/users/${users}`
        }).then((user)=>{
            setEdUser(user.data)
        })
    },[])
    const FormSubmit8=(e)=>{
        e.preventDefault();
        if(editFirstName&&editSecondName&&editMail&&editRole&&editAge&&editPassword&&editPhoneNumber!==''){axios({
            method:'put',
            url:`http://localhost:9000/users/${users}`,
            data:{firstName:editFirstName,
                SecondName:editSecondName,
                EmailAdress:editMail,
            type:editRole,
            Age:editAge,
            password:editPassword,
            phoneNumber:editPhoneNumber                } 
        })
        navigate('/users')}else {
            setError('Kindly fill all the fields')
        }
        
    }
   
  return (
    <div className='signForm' >
      
    <div className='signup shadow p-3 mb-5 bg-body rounded'  pill='true' >
        <h1 className='signin' >Edit User</h1>
<Form onSubmit={FormSubmit8} >
<Form.Group className="mb-3" controlId="formBasicFirstName">
<Form.Label className={'signin'}>First Name</Form.Label>
<Form.Control type="text" placeholder={edUser.firstName}  value={editFirstName} onChange={(e)=>{setEditFirstName(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicSecondName">
<Form.Label className={'signin'}>Second Name</Form.Label>
<Form.Control type="text" placeholder={edUser.SecondName}  value={editSecondName} onChange={(e)=>{setEditSecondName(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicMail">
<Form.Label className={'signin'}>Email</Form.Label>
<Form.Control type="text" placeholder={edUser.EmailAddress}  value={editMail} onChange={(e)=>{setEditMail(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label className={'signin'}>Password</Form.Label>
<Form.Control type="password" placeholder={edUser.password}  value={editPassword} onChange={(e)=>{setEditPassword(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
<Form.Label className={'signin'}>phoneNumber</Form.Label>
<Form.Control type="number" placeholder={edUser.phoneNumber}  value={editPhoneNumber} onChange={(e)=>{setEditPhoneNumber(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className={'signin'}>Role</Form.Label>
<Form.Select  type='select'  value={editRole } onChange={(e)=>{setEditRole(e.target.value)}}>
<option >admin</option>
<option >user</option>
</Form.Select>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicAge">
<Form.Label className={'signin'}>Age</Form.Label>
<Form.Control type="number" placeholder={edUser.Age}  value={editAge} onChange={(e)=>{setEditAge(e.target.value)}}/>
</Form.Group>

<h5 className='error'>{error}</h5>
<Button variant="primary" className='login'  type="submit">
Submit
</Button>

</Form>
</div>

</div>
  )
}

export default EditUsers