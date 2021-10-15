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
import MenuReducer from "./MenuReducer";
import ProductReducer from "./ProductReducer";

// Properties
const MenuContext = createContext(null);

export function MenuStateProvider({ children }) {
  // Local state
  const [menu, menuDispatch] = useReducer(MenuReducer, []);
  const [products, productsDispatch] = useReducer(ProductReducer, []);

  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const menuCollection = "menu";

  /* Methods
  const fetchData = useCallback(async (path) => {
    try {
      console.log("useEffect in menu provider called");
      const menu = await getCollection(path);
      menuDispatch({ type: "SET_MENU", payload: menu });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchData(menuCollection);
    fetchData(productsSubcollection);
  }, []);
*/
  return (
    <MenuContext.Provider
      value={{ menu, menuDispatch, products, productsDispatch }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
