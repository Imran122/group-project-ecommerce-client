import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import './MyOrder.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const MyOrders = () => {
  return (
    <div>
      <Header></Header> 
      <div className="my-orders-content my-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="container">
                {/* ========Single Order======== */}
                <div className="row d-flex align-items-center border p-2 my-2">
                  <div className="col-lg-3">
                    <div className="order-img">
                      <img
                        src="https://i.ibb.co/8KMWVKk/denim.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="content">
                      <h4>Denim Jaket</h4>
                      <div className="icon">
                        <span> <DeleteOutlineIcon /> </span>
                        <span> <FavoriteBorderOutlinedIcon /> </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="add-to-cart">
                        <div className='count'>
                            <span>-</span>
                            <input type="text" defaultValue={1} />
                            <span>+</span>
                        </div> 
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="price">
                      <h2>৳999</h2>
                    </div>
                  </div>
                </div>
                {/* ========Single Order======== */}
                <div className="row d-flex align-items-center border p-2 my-2">
                  <div className="col-lg-3">
                    <div className="order-img">
                      <img
                        src="https://i.ibb.co/bP948rq/cap.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="content">
                      <h4>Cap Stylis</h4>
                      <div className="icon">
                        <span> <DeleteOutlineIcon /> </span>
                        <span> <FavoriteBorderOutlinedIcon /> </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="add-to-cart">
                        <div className='count'>
                            <span>-</span>
                            <input type="text" defaultValue={1} />
                            <span>+</span>
                        </div> 
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="price">
                      <h2>৳699</h2>
                    </div>
                  </div>
                </div>
                {/* ========Single Order======== */}
                <div className="row d-flex align-items-center border p-2 my-2">
                  <div className="col-lg-3">
                    <div className="order-img">
                      <img
                        src="https://i.ibb.co/cXx5x6L/jaket.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="content">
                      <h4>Winter Jaket</h4>
                      <div className="icon">
                        <span> <DeleteOutlineIcon /> </span>
                        <span> <FavoriteBorderOutlinedIcon /> </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="add-to-cart">
                        <div className='count'>
                            <span>-</span>
                            <input type="text" defaultValue={1} />
                            <span>+</span>
                        </div> 
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="price">
                      <h2>৳999</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* checkout summary */}
            <div className="col-lg-4">
                <div className="checkout border shadow p-3 my-5">
                    <h4>Checkout Summary</h4>
                    <hr />
                    <div className="total">
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h5>Subtotal</h5>
                            <p>100</p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h5>Shipping</h5>
                            <p>20</p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h5>Total</h5>
                            <p>100</p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h5 className="fw-bold">Payable Total</h5>
                            <p className="fw-bold">200</p>
                        </div>
                        <Link to='/shipping'> 
                             <button className="place-order-btn">Place Order</button>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;
