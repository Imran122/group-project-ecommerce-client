import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {id,name,img, price, description} = product
    return (
        <div className='col-md-4'>
            <div className="single-product text-center mb-4 p-3">
                <img style={{height: 240,  }} src={img} alt="" className='img-fluid product-img' />
                <h3>{name}</h3> 
                <p>{description}</p>
                <h5>Price{price}</h5>
                <Link to={`/product/${id}`}>
                   <button className='btn btn-outline-dark'>Buy Now</button>
                </Link>
                
            </div>
        </div>
    );
};

export default Product;