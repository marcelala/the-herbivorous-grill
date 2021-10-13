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
import GlobalReducer from "./GlobalReducer";

// Properties
const initialState = [{ restaurantInfo: [] }];
const GlobalContext = createContext(initialState);
export function GlobalStateProvider({ children }) {
  // Local state
  const [globalState, globalDispatch] = useReducer(GlobalReducer, []);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const PATH = "restaurantInfo";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const state = await getCollection(path);
      console.log("restaurantInfo", state);
      globalDispatch({ type: "SET_STATE", payload: state.restaurantInfo });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(PATH), [fetchData]);

  const restaurantData = globalState.restaurantInfo;

  return (
    <GlobalContext.Provider
      value={{ restaurantData, dispatch: globalDispatch, status }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalContext);

  return context;
}
