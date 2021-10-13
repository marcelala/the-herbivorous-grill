// NPM Packages
import { useContext, createContext, useReducer } from "react";
// Project files
import ProductReducer from "./ProductReducer";

// Properties
const ProductContext = createContext(null);

export function ProductStateProvider({ children }) {
  // Local state
  const [products, productsDispatch] = useReducer(ProductReducer, []);

  return (
    <ProductContext.Provider value={{ products, productsDispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const productsContext = useContext(ProductContext);

  return productsContext;
}
