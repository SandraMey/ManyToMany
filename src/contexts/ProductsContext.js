import React, { createContext, useState } from "react";
import { data, data2 } from "../data";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(data);
  const [products2] = useState(data2);
  const [showproducts, setshowproducts] = useState(false);

  return (
    <ProductsContext.Provider value={{ products, showproducts, setshowproducts, products2 }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
