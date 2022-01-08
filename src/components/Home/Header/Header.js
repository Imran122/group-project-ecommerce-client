import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React from "react"; 
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light scroll">
        <div className="container">
          <Link to="/home">
            <a className="navbar-brand brand-title" href="#">
              e-Commerce
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-4 navbar-links">
              <Link to="/home">Home</Link>
              <Link to="/allproducts">Products</Link> 
              <Link to="/myorders">My Orders</Link> 
            </div>
            <div>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined></ShoppingCartOutlined>
              </Badge>
            </div>
            <div>
              <button className="login-btn-header">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
