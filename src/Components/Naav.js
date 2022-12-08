import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from 'react-icons/fa';
import {Badge} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'
import { Button } from 'bootstrap';
import axios from 'axios';


 const Naav =(props)=> {

  


    return (
        <Navbar collapseOnSelect expand="lg" className='naav' variant="dark">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
        <Link to={'/'} className={'Home'}>Home</Link>
        <Link to={'/Shop'} className={'Home'}>Shop</Link>
     
           <Link to={'/signin'} className={'Home'} onClick={props.FormSubmit4} >{props.signin}</Link>
          <Link to={'/controlPanel'} className={'Home'}>{props.checkError=='admin'?'ControlPanel':''}</Link> 
         
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