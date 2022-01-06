import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header/Header';
import TopSortTitle from '../Home/TopSortTitle/TopSortTitle';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {Id} = useParams();
    const [singleDetails, setSingleDetails] = useState([]);
    const [getDetails, setGetDetails] = useState({});

    useEffect( () =>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setSingleDetails(data))
    }, []);

    useEffect( () => {
        const details = singleDetails.find(td => td.id == Id)
        setGetDetails(details)
    },[singleDetails])

    return (
        <div>
            <Header></Header> 
            <TopSortTitle></TopSortTitle>
             <div className="container">
                 <div className="row"> 
                    <div className="col-lg-6">
                        <div className="single-details-img py-5">
                            <img src={getDetails?.img} className='img-fluid mx-auto w-50 ' alt="" />
                        </div> 
                    </div>
                    <div className="col-lg-6">
                        <div className="single-details-services py-5 text-start">
                            <div className="title">
                                <h2 className='fw-bold mb-4'>{getDetails?.name}</h2> 
                            </div> 
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut consectetur exercitationem officiis? Praesentium facilis repellendus modi molestias eius fugiat illo unde. Laudantium laborum inventore placeat molestiae praesentium ipsum quod, at ad aliquam ratione, dolor, quasi ex? Voluptatem, facere ducimus? {getDetails?.description}</p>
                            <h2 className='text-primary fw-bold'>Taka: {getDetails?.price}</h2> 
                        </div>
                        <div className="add-to-cart">
                            <div className='count'>
                                <span>-</span>
                                <input type="text" defaultValue={1} />
                                <span>+</span>
                            </div>
                            <div>
                                <button className='btn btn-primary'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    );
};

export default ServiceDetails;