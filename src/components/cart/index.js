import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import { useProducts } from "../../hooks/useProducts";
import ProductItem from "./../store/ProductItem";
import CardProducts from "./../cart/CartProducts";
import Griditems from "./../store/Griditem";

import "./carousselle.css";

const Cart = () => {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useCart();

  const { products2 } = useProducts();

  return (
    <div title="Cart" description="This is the Cart page">
      <div>
        <Link to="/shop">
          <button className="button">Add More to your PremadeKit</button>
        </Link>
        <div className="text-center mt-5">
          <h1>ProductsKit</h1>
          <p>This is the Products Kit list selected for you.</p>
        </div>
        {/* ****************************************************************** */}

        {/* ***************************************************************** */}
        <div className="le-grid">
          {products2.map((product) => (
            <Griditems key={product.id} product={product} />
          ))}
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <CardProducts />
            ) : (
              <div className="p-3 text-center text-muted">
                Your cart is empty
              </div>
            )}

            {checkout && (
              <div className="p-3 text-center text-success">
                <p>Checkout successfull</p>
                <Link to="/shop" className="btn btn-outline-success btn-sm">
                  BUY MORE
                </Link>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="col-sm-3 p-3">
              <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                <hr className="my-4" />
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
