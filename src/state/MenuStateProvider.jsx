// NPM Packages
import { useContext, createContext, useReducer } from "react";

// Project files
import MenuReducer from "./MenuReducer";
import ProductReducer from "./ProductReducer";

// Properties
const MenuContext = createContext(null);

export function MenuStateProvider({ children }) {
  // Local state
  const [menu, menuDispatch] = useReducer(MenuReducer, []);
  const [products, productsDispatch] = useReducer(ProductReducer, []);

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
