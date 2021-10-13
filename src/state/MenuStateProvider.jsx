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
import MenuReducer from "./MenuReducer";

// Properties
const MenuContext = createContext(null);
export function MenuStateProvider({ children }) {
  // Local state
  const [menu, menuDispatch] = useReducer(MenuReducer, []);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const PATH = "menu";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const menu = await getCollection(path);
      console.log("menu", menu);
      menuDispatch({ type: "SET_MENU", payload: menu });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(PATH), [fetchData]);

  return (
    <MenuContext.Provider value={{ menu, dispatch: menuDispatch, status }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
