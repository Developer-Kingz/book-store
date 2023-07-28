/* eslint-disable */
import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => (
    <div className="navbar">
        <div className="logo">
            <span className="head-logo">
                <h1>Bookstore CMS</h1>
            </span>
            <ul>
                <NavLink to="/book-store" className="link-style">
                    BOOKS
                </NavLink>
                <NavLink to="/category" className="link-style">
                    CATEGORIES
                </NavLink>
            </ul>
            <div className="user-circle">
                <FontAwesomeIcon icon="user" className="custom-icon" />
            </div>
        </div>
    </div>
);

export default Navbar;
/* eslint-enable */
