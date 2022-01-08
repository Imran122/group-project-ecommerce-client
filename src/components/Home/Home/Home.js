import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header> 
             <Banner></Banner>
             <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;