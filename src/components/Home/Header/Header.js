import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand brand-title" href="#">e-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-4 navbar-links">
                            <Link to='/home'>
                                Home
                            </Link> 
                            <a className="nav-link" href="#">Products</a>
                            <a className="nav-link" href="#">About Us</a>
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