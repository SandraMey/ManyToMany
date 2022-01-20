import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import { useProducts } from "../../hooks/useProducts";

import "./../cart/carousselle.css";

const Griditems = ({ product }) => {
  const { addProduct, cartItems, increase } = useCart();
  const { showproducts,setshowproducts } = useProducts();
  

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <>
      <div className="propos1 bestchoic">
        <div className="container-Infos-Bestchoic"></div>
        <div className="card card-body">
          <img
            style={{
              display: "block",
              margin: "0 auto 10px",
              maxHeight: "200px",
            }}
            className="img-fluid"
            src={product.photo + "?v=" + product.id}
            alt=""
          />
          <p>{product.name}</p>
          <h3 className="text-left">{formatNumber(product.price)}</h3>
          <div className="text-right">
            <Link to="/" className="btn btn-link btn-sm mr-2">
              Details
            </Link>

            {isInCart(product) && (
              <button
                onClick={() => increase(product)}
                onClick={() => setshowproducts(!showproducts)}
                className="btn btn-outline-primary btn-sm"
              >
                Add more
              </button>
            )}

            {!isInCart(product) && (
              <button
              onClick={() => setshowproducts(false)}
                onClick={() => addProduct(product)}
                className="btn btn-primary btn-sm"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Griditems;
