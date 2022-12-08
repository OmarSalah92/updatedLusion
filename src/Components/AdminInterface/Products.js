import React from "react";
import { NavLink, Route, Routes,Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Button, Table } from "react-bootstrap";
const Products = (props) => {
  return (
    <div className="row cp">
    <div className="col-2 SideBar">
    <Link to={'/products'} className={'Home'}>Products</Link>
    <Link to={'/users'} className={'Home mt-3'}>Users</Link>
    <Link to={'/dashboard'} className={'Home mt-3'}>Dashboard</Link>

    </div>
    <div className="col-10">
    <div className="product-table">
    <Nav.Link as={NavLink} to={'/newproduct'}>
      <Button variant={"success"} className="mb-3" >
        Add New Product
      </Button>
    </Nav.Link>

    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>Product Name</th>
        </tr>
      </thead>
      <tbody>
        
        {props.newProducts.map((e)=>(
            <tr key={e.id} >
            
           
            <td className="items-table">
           
            <h1 className="fs-3" >{e.productName} (Item number {e.id})</h1>
            
            <img src={e.productImage}/>
              
              <div className="products-btns">
                <Nav.Link>
                  <Button
                    variant={"danger"}
                   onClick={()=>props.delProduct(e)}
                  >
                    Delete
                  </Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to={`/products/${e.id}`}  >
                  <Button variant={"primary"} >View</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to={`/editproducts/${e.id}`}>
                  <Button variant={"warning"}>Edit</Button>
                </Nav.Link>
              </div>
            </td>
          </tr>
        ))}
    
          
      
      </tbody>
    </Table>
  </div>
  </div>
  </div>
  );
};

export default Products;















