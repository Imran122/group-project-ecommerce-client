import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/home"><Link to="/" className='brand-title'>e-Commerce</Link></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-4 navbar-links">
                            <Link to='/' className="nav-link">Home</Link>
                            <Link to='/products' className="nav-link">Products</Link>
                            <Link to='/aboutUs' className="nav-link">About Us</Link>
                        </div>
                        <div>
                            <Link to="/login"><button className="login-btn-header">Login</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;