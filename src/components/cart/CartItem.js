import React from "react";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../../components/icons";
import { useProducts } from "../../hooks/useProducts";


const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct} = useCart();
  const { showproducts,setshowproducts } = useProducts();
  console.log(showproducts)
 
  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={product.name}
          style={{ margin: "0 auto", maxHeight: "600px" }}
          src={product.photo}
          className="img-fluid d-block"
        />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">{product.name}</h5>
        <p className="mb-1">Price: {formatNumber(product.price)} </p>
        <p className="mb-1">Qty: {product.quantity}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
          <button
            onClick={() => setshowproducts(!showproducts)}
            className="btn btn-more btn-sm mr-2 mb-1"
          >
            More product
          </button>
        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          <PlusCircleIcon width={"20px"} />
        </button>

        {product.quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="btn btn-danger btn-sm mb-1"
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        )}

        {(product.quantity === 1 )||(product.quantity === 0 ) && (
          <button
            onClick={() => removeProduct(product)}
            className="btn btn-danger btn-sm mb-1"
          >
            <TrashIcon width={"20px"} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
