import React from "react";

import { Routes, Route } from "react-router-dom";
import Naav from "../Naav";
import Home from "../Home";
import Products from "./Products";
import SideBar from "./SideBar";
import {Link} from 'react-router-dom'
const controlPanel = () => {
  return (
    <div>
      
      <div className="row cp">
        <div className="col-2 SideBar">
        <Link to={'/products'} className={'Home'}>Products</Link>
        <Link to={'/users'} className={'Home mt-3'}>Users</Link>
        <Link to={'/dashboard'} className={'Home mt-3'}>Dashboard</Link>

        </div>
        <div className="col-10 conpan mt-5">
        <h1>Hello Admin</h1>
        </div>
      </div>
    </div>
  );
};


export default controlPanel