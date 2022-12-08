import React, { useEffect } from "react";
import { NavLink, Route, Routes,Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const Users = (props) => {
    
  return (
    <div className="row cp">
    <div className="col-2 SideBar">
    <Link to={'/products'} className={'Home'}>Products</Link>
    <Link to={'/users'} className={'Home mt-3'}>Users</Link>
    <Link to={'/dashboard'} className={'Home mt-3'}>Dashboard</Link>

    </div>
    <div className="col-10">
    <div className="product-table">
      <Nav.Link as={NavLink} to="/newusers">
        <Button variant={"success"} className="mb-3">
          Add New User
        </Button>
      </Nav.Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Age</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
         
          
          
            {props.newUsers.map((e)=>(  
                <tr key={e.id}>
                <td>{e.id}</td>
            <td>{e.firstName}</td>
            <td>{e.Age}</td>
            
            <td className="items-table1">
              <h1 className="fs-3"></h1>
              <div className="products-btns1">
                <Nav.Link>
                  <Button
                    variant={"danger"}
                    className={'me-3'}
                    onClick={()=>props.delUser(e)}
                  >
                    Delete
                  </Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to={`/users/${e.id}`}>
                  <Button variant={"primary"} className={'me-3'}>View</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to={`/editusers/${e.id}`} >
                  <Button variant={"warning"} className={'me-5'}>Edit</Button>
                </Nav.Link>
              </div>
            </td> 
            
          </tr>))}
         
       
  
      </tbody>
      </Table>
    </div>
    </div>
    </div>
  )
}

export default Users