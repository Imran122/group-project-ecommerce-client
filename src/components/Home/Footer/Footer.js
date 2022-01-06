import React from 'react';
import './Footer.css'
import googlePLay from '../../../images/play-sotre.png'
import ssl from '../../../images/ssl.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-6 col-lg-3 ps-2 pe-3 mb-4">
                        <h3 className="footer-title" href="#">e-Commerce</h3>
                        <p className='mb-1'>e-Commerce is a trusted online based shopping website. We are seeing the quality best and the customer satisfaction.</p>
                        <p className='m-0'>Begin your safe online shopping with us</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h3 className='footer-title'>Information</h3>
                        <div className="f-information-link">
                            <a href="#">Terms and Conditions</a>
                            <br />
                            <a href="#">Refund Policy</a>
                            <br />
                            <a href="#">Privacy Policy</a>
                            <br />
                            <a href="#">Shipping or Delivery</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h3 className='footer-title'>Get Our App</h3>
                        <a href="#"><img className='mt-4 img-fluid' src={googlePLay} alt="" /></a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3 className='footer-title'>Payment System</h3>
                        <img src={ssl} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;