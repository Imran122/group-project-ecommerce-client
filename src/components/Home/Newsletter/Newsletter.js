import React from 'react';

const Newsletter = () => {
    return (
        <div id='newsletter' style={{
            backgroundColor: '#FF324D',
            padding:'50px 0 ',
            textAlign:"center"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='text-light'>Subscribe Our Newsletter</h2>
                    </div>
                    <div className="col-lg-6">
                        <div className='d-flex align-items-center'>
                            <input type="text" placeholder='Your email address' className='form-control' />
                            <button type='submit' className='btn btn-dark'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;