import React from "react";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import './Shipping.css'

const Shipping = () => {
  return (
    <div>
      <Header></Header>
      <div id="shipping-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="shipping-form my-5">
                <form className=" border p-3 bg-light rounded shadow">
                  <h2 className="text-center mb-4">Shipping Information</h2>
                  <div className="mb-2">
                    <label className="fw-bold">Name: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold">Email: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold">Phone: </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="fw-bold">Address/Street: </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Address Number"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span className="fw-bold">City: </span>
                      <input type="text" className="form-control" />
                    </div>
                    <div>
                      <span className="fw-bold">Zip Code: </span>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="order-btn my-3">
                      <button className="btn btn-success">Order Confirm</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shipping;
