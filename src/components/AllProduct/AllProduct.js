import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './AllProduct.css'

const AllProduct = ({ allProduct }) => {
  const { id, name, description, img, price } = allProduct;
  return (
    <div className="col-lg-12">
      <div className="container">
        {/* ========Single Order======== */}
        <div className="row d-flex align-items-center border p-2 my-2">
          <div className="col-lg-3">
            <div className="order-img">
              <img
                src={img}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content">
              <h4>{name}</h4>
              <p>{description}</p>
              <div className="icon">
                <span>
                  {" "}
                  <DeleteOutlineIcon />{" "}
                </span>
                <span>
                  {" "}
                  <FavoriteBorderOutlinedIcon />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="add-to-cart">
              <div className="count">
                <span>-</span>
                <input type="text" defaultValue={1} />
                <span>+</span>
              </div>
            </div>
            <div>
                <button type="button" className="cart-btn">Add To Cart</button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="price">
              <h2>{price}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
