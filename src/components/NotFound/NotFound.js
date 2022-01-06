import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Page not found back to home <Link to='/home'>Home</Link></h2>
        </div>
    );
};

export default NotFound;