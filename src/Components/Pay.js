import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Pay = (props) => {
  return (
    
    <div className='signForm ' >
      
    <div className='signup1 shadow p-3 mb-5 bg-body rounded'  pill='true' >
        <h1 className='signin fs-3' >Payment information</h1>
<Form  onSubmit={props.FormSubmit1}>
<Form.Group className="mb-3" >
<Form.Label  >{props.cardNameError}</Form.Label>
<Form.Control  type="text" placeholder="Name " value={props.cardName} onChange={props.changeCardName} />

</Form.Group>
<Form.Group className="mb-3" >
<Form.Label >{props.cardNumberError}</Form.Label>
<Form.Control type="number" name="cardNumber"  size="30"  placeholder="Credit card Number" value={props.cardNumber} onChange={props.changeCardNumber} />

</Form.Group>
<Form.Group className="mb-3" >
<Form.Label >Expiration Date</Form.Label>
<Form.Control type="month" id="start" name="start" placeholder="Name on card" value="2022-11" onChange={props.changeCardDate}/>

</Form.Group>
<Form.Group className="mb-3" >
<Form.Label >{props.cvvError}</Form.Label>
<Form.Control  type="password" placeholder="CVV" value={props.cvv} onChange={props.changeCvv} />

</Form.Group>
<div className='d-flex'>
<Button variant="success" className='login1 col-lg-6'  type="submit">
 Pay
</Button>
<Button variant="primary" className='login1 col-lg-6 ms-1'  type="submit">
Back
</Button>
</div>
</Form>
</div>

</div>

  )
}

export default Pay