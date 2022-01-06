import React from 'react';

const Product = ({product}) => {
    const {name,img, price, description} = product
    return (
        <div className='col-md-4'>
            <div className="single-product text-center mb-4 p-3">
                <img style={{height: 270,  }} src={img} alt="" className='img-fluid product-img' />
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Price{price}</h5>
            </div>
        </div>
    );
};

export default Product;