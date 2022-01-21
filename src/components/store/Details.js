import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className="card card-body">
      <div className="text-center">
        <h1>Product details</h1>
        <h2>Features Type of basin plug</h2>
        <h3>Click clack Material Chrome</h3><br/>
        <h3>Product Information</h3>
        <ul>
          <li>Brand : Grohe</li>
          <li>Product type: Click and go waste</li>
          <li>for washbasin with overflow</li>
          <li>Manufacturer#: 40824000</li>
          <li>Colour: Chrome</li>
        </ul><br/>
        <h3>Product Information</h3>
        <ul>
          <li>For washbasin with overflow</li>
          <li>Removable drain</li>
          <li>Reclosable</li>
        </ul>

        <Link to="/shop" className="btn btn-link btn-sm mr-2">
              <h3>Back to store</h3>
        </Link>
      </div>
    </div>
  );
};

export default Details;
