import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/home"><Link to="/" className='brand-title'>jozzBy</Link></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-4 navbar-links me-2">
                            <Link to='/' className="nav-link">Home</Link>
                            <Link to='/allproducts' className="nav-link">Products</Link>
                            <Link to='/aboutUs' className="nav-link">About Us</Link>
                            { user.displayName && <Link className="nav-link" to="/dashboard">Dashboard</Link>}
                        </div>
                        <div className='me-2 '>
                            {
                                user.displayName ? <Link to="/login"><button onClick={logOut} className="login-btn-header">Log Out</button></Link> :
                                <Link to="/login"><button className="login-btn-header">Login</button></Link>
                            }
                        </div>
                        <div className="user-info">
                            { user.displayName && <img className="avatar-img m-0" src={user.photoURL} alt="Avatar" />}
                            <p className="m-0">{user.displayName}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;