import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Header></Header> 
             <Banner></Banner>
             <Products></Products>
             <Newsletter></Newsletter>
             <Footer></Footer>
        </div>
    );
};

export default Home;