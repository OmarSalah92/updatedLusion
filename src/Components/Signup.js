import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import {Link} from'react-router-dom'
import {AiFillEyeInvisible} from 'react-icons'
import { FaBaby } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const signup = (props) => {
   

 
   
    
  return (
    <div className='signForm' >
      
    <div className='signup shadow p-3 mb-5 bg-body rounded'  pill='true' >
        <h1 className='signin' >Sign up</h1>
<Form  onSubmit={props.FormSubmit}>
<Form.Group className="mb-3" controlId="formBasicFirstName">
<Form.Label className={props.firstNameError==='invalid First Name'?'error' :'signin'}>{props.firstNameError}</Form.Label>
<Form.Control type="text" placeholder="Enter First Name" value={props.firstName} onChange={props.changeFirstName}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicSecondName">
<Form.Label className={props.secondNameError==='invalid Second Name'?'error' :'signin'}>{props.secondNameError}</Form.Label>
<Form.Control type="text" placeholder="Enter Second Name" value={props.SecondName} onChange={props.changeSecondName}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
<Form.Label className={props.phoneNumberError==='invalid Phone Number'?'error' :'signin'}>{props.phoneNumberError}</Form.Label>
<Form.Control type="text" placeholder="Enter Phone Number" value={props.phoneNumber} onChange={props.changePhone}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className={props.emailError==='invalid Email Address'?'error' :'signin'}>{props.emailError}</Form.Label>
<Form.Control type="email" placeholder="Enter Email Address" value={props.email} onChange={props.changeEmailAdress} />

</Form.Group>


<Form.Group className="mb-3" >
<Form.Label className={props.ageError==='invalid Age'?'error' :'signin'}>{props.ageError}</Form.Label>

<Form.Control  type={'number'} placeholder="Age" value={props.age } onChange={props.changeAge} />

</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className={props.passwordError==='invalid Password'?'error' :'signin'}>{props.passwordError}</Form.Label>

<Form.Control  type={props.passwordShown?'text':'password'} placeholder="Password" value={props.password } onChange={props.changePassword} />

</Form.Group>
<Button className="mb-3"  variant="Light" onClick={props.togglePassword}>
<AiFillEye/>
</Button>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
      <h5 className='error' >{props.incorrect1}</h5>
    </Form.Group>

<Button variant="primary" className='login'  type="submit">
Sign up
</Button>

</Form>
</div>

</div>

  )
}

export default signup