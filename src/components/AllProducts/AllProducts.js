import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const AllProducts = () => {
    const [allProducts, setAllProducts ] = useState([]);
    useEffect( () =>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setAllProducts(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        allProducts.map(allProduct => <AllProduct
                        allProduct={allProduct}
                        key={allProduct.id}
                        ></AllProduct>)
                    } 
                </div>
            </div> 
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;