import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const SideBar = () => {
  return (
    <div>
      <Nav.Link as={NavLink} to="/users">
        <h1 className="fs-3">Users</h1>
      </Nav.Link>
      <Nav.Link as={NavLink} to="/products">
        <h1 className="fs-3 ">Products</h1>
      </Nav.Link>
      <Nav.Link as={NavLink} to="/dashboard">
        <h1 className="fs-3 ">Dashboard</h1>
      </Nav.Link>
      
    </div>
  );
};

export default SideBar;