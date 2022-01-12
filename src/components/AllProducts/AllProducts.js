import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://nameless-tundra-96938.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data.products));
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">

                {
                    allProducts.map(allProduct => <AllProduct
                        allProduct={allProduct}
                        key={allProduct.id}
                    ></AllProduct>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;