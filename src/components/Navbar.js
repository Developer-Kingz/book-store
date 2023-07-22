import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <span className="head-logo">
        <h1>Bookstore CMS</h1>
      </span>
      <ul>
        <NavLink to="/">
          <li>BOOKS</li>
        </NavLink>
        <NavLink to="/category">
          <li>CATEGORIES</li>
        </NavLink>
      </ul>
    </div>
  </div>
);

export default Navbar;
