import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://nameless-tundra-96938.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])
    console.log(products)
    return (
        <div>
            <h2 className='text-center my-5'>Our Products </h2>
            <div className="container-fluid">
                <div className="row">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;