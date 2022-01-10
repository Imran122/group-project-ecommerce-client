import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'


const Product = ({product}) => {
    const {id,name,img, price, description} = product
    return (
        <div className='col-md-4'>
            <div className="single-product text-center mb-4 p-3">
                <div className="product-img">
                    <img style={{height: 240,  }} src={img} alt="" className='img-fluid product-img' />
                </div> 
                {/* <h3>{name}</h3> 
                <p>{description}</p>
                <h5>Price{price}</h5> */}
                <div className="btn my-3">  
                    <Link to={`/product/${id}`}>
                    <button className='btn btn-warning'>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;