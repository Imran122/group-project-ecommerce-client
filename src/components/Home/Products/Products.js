import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts ] = useState([]);
    useEffect( () =>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 className='text-center my-5'>Our Products </h2>
            <div className="row">
                {
                    products.map(product => <Product
                    product= {product}
                    key={product.id}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;