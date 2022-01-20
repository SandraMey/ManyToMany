import React from 'react';
import { Link } from 'react-router-dom';
import CartProducts from './CartProducts';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const Cart = () => {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout, increase  } =
    useCart();

  return (
    <div title="Cart" description="This is the Cart page">
      <div>
        <Link to="/shop">
          <button className="button">Add More to your PremadeKit</button>
        </Link>
        <div className="text-center mt-5">
          <h1>ProductsKit</h1>
          <p>This is the Products Kit list selected for you.</p>
          <div>
            {cartItems
              .filter(
                (element) =>
                  element.id === 15 ||
                  element.id === 11 ||
                  element.id === 12 ||
                  element.id === 13 ||
                  element.id === 14
              )
              .map((d) => {
                return (
                  <div>
                    <p>{d.name}</p>
                    <p>{d.price}</p>
                    <img src={d.photo} alt=""></img>
                    <button
                      onClick={() => increase(d)}
                      className="btn btn-primary btn-sm mr-2 mb-1"
                    >
                      add
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {cartItems.length > 0 ? (
              <CartProducts />
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
