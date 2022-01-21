import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';
import { useProducts } from '../../hooks/useProducts';
import {FaStar} from "react-icons/fa";
import { StarContainer,Input,Rate,Wrapper } from './styleComponent';

import './../cart/carousselle.css';

const Griditems = ({ product }) => {
  const { addProduct, cartItems, increase } = useCart();
  const { showproducts, setshowproducts } = useProducts();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <>
      <div key={product.id} className="propos1 bestchoic">
        <div className="card card-body">
          <div className="text-center">
          <img
            style={{
              display: 'block',
              margin: '0 auto 10px',
              maxHeight: '220px',
            }}
            className="img-fluid"
            src={product.photo + '?v=' + product.id}
            alt=""
          />
          <p>{product.name}</p>
          <h3 className="text-center">{formatNumber(product.price)}</h3>
            <Wrapper>
            <StarContainer>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <Input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      size={30}
                      color={
                        ratingValue <= (hover || rating) ? 'ffc107' : 'e4E5E9'
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            <Rate> {rating} ({product.rate})</Rate>
            </StarContainer> 
            </Wrapper>
            <Link to="/details" className="btn btn-link btn-sm mr-2">
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
                onClick={() => setshowproducts(!showproducts)}
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
