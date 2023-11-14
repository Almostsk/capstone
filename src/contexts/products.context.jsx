import { createContext, useState, useEffect } from "react";

import PRODUCT from "../shop-data.json";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
