import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import {Link} from'react-router-dom'
const NewUser = (props) => {
  return (
    <div className='signForm' >
      
    <div className='newUserSignup shadow p-3 mb-5 bg-body rounded'  pill='true' >
        <h1 className='signin' >New User</h1>
<Form  onSubmit={props.FormSubmit7}>
<Form.Group className="mb-3" controlId="formBasicFirstName">
<Form.Label className={'signin'}>{props.userNameError}</Form.Label>
<Form.Control type="text" placeholder="Enter User Name" value={props.userName} onChange={props.changeUserName}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className={'signin'}>{props.newNameError}</Form.Label>
<Form.Control type="text" placeholder="Enter Name" value={props.newName} onChange={props.changeNewName} />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicSecondName">
<Form.Label className={'signin'}>{props.userMailError}</Form.Label>
<Form.Control type="text" placeholder="Enter Email" value={props.userMail} onChange={props.changeUserMail}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
<Form.Label className={'signin'}>{props.userPasswordError}</Form.Label>
<Form.Control type="password" placeholder="Enter Password" value={props.userPassword} onChange={props.changeUserPassword}/>

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicName">
<Form.Label className={'signin'}>{props.userPhoneNumberError}</Form.Label>
<Form.Control type="number" placeholder="Enter Phone Number" value={props.userPhoneNumber} onChange={props.changeUserPhoneNumber}/>

</Form.Group>




<Form.Group className="mb-3" >
<Form.Label className={'signin'}>{props.userAgeError}</Form.Label>

<Form.Control  type='number'  value={props.userAge } onChange={props.changeUserAge} />

</Form.Group>
<Form.Group className="mb-3" >
<Form.Label className={'signin'}>{props.userRoleError}</Form.Label>

<Form.Select  type='select'  value={props.userRole } onChange={props.changeUserRole}>
<option >admin</option>
<option >user</option>
</Form.Select>
</Form.Group>


<Button variant="primary" className='login'  type="submit">
Add User
</Button>

</Form>
</div>

</div>
  )
}

export default NewUser