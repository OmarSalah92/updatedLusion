import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Badge from 'react-bootstrap/Badge';
import {Link, useNavigate} from'react-router-dom'
import axios from 'axios'
const Signin = (props) => {
  

  
  return (
    <div className='signForm '>
      
            <div className='sign shadow p-3 mb-5 bg-body rounded' pill='true'>
                <h1 className='signin' >Sign in</h1>
    <Form onSubmit={props.FormSubmit3}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className='signin'>{props.emailError}</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={props.email} onChange={(props.changeEmailAdress3)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='signin'>{props.passwordError}</Form.Label>
      <Form.Control type="password" placeholder="Password" value={props.password} onChange={props.changePassword3}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <h5 className='error' >{props.incorrect}</h5>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Save Password" />
    </Form.Group>
    <Button variant="primary" className='login' type="submit">
      Log in
    </Button>
    <Form.Label className='signn mt-3'>Do you want to Join Lusion ?</Form.Label>

    <Link to={'/signup'} className='login'>Sign-up</Link>
  </Form>
  </div>
 
  </div>

  )
}

export default Signin