// NPM Packages
import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from "react";

// Project files
import { getCollection } from "../scripts/fireStore";
import ProductReducer from "./ProductReducer";
import { useParams } from "react-router-dom";

// Properties
const ProductContext = createContext(null);

export function ProductStateProvider({ children }) {
  const { category_id } = useParams();
  // Local state
  const [products, productsDispatch] = useReducer(ProductReducer, []);
  {
    /*const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const path = `menu/${category_id}/products/`;

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const products = await getCollection(path);
      console.log("products", category_id);
      productsDispatch({ type: "SET_PRODUCTS", payload: products });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(path), [fetchData]);
*/
  }
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
