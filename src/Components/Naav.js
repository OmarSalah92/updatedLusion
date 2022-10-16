import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from 'react-icons/fa';
import {Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'


 const Naav =(props)=> {
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <Link to={'/'} className={'Home'}>Home</Link>
        <Link to={'/Shop'} className={'Home'}>Shop</Link>
            
          </Nav>
        
          
        </Navbar.Collapse>
        <Navbar.Brand  className='lus'>Lusion</Navbar.Brand>
        <span>
        <Link to={'/Cart'} className={'Home'}><FaCartPlus/></Link>
        <Badge className={props.newProducts1.length>0?'badge1':props.newProducts.length>0?'badge1':'badge'}>{props.newProducts1.length+props.newProducts.length}</Badge>
        </span>
        
      </Container>
      
    </Navbar>
    
    )
  }



export default Naav