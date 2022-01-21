import React from 'react';
import ProductsGrid from './ProductsGrid';
import { Link } from 'react-router-dom';

const Store = () => {
  return (
    <div title="Store" description="This is the Store page">
      <Link to="/products">
        <button className="button">Back to your premade bathroom Kit</button>
      </Link>
      <div>
        <div className="text-center mt-5">
          <h1>Store List Advices</h1>
          <p>This is the ManoMano alternatives to your choice.</p>
        </div>
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Store;
