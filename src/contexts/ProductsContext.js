import React, { createContext, useState } from "react";
import { data, data2 } from "../data";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(data);
  const [products2] = useState(data2);

  return (
    <ProductsContext.Provider value={{ products, products2 }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
