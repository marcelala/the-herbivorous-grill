// NPM packages
// Project files
import { useMenu } from "./state/MenuStateProvider";
import { getCollection } from "./scripts/firebase/fireStore";
import { Browser } from "./components/Browser";
import { useCallback, useEffect, useState } from "react";

function HerbivorousGrill() {
  // Global state
  // @ts-ignore
  const { menuDispatch } = useMenu();
  // Properties
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Methods
  const fetchMenuData = useCallback(async () => {
    const path = "menu";
    try {
      const menuCollection = await getCollection(path);
      menuDispatch({ type: "SET_MENU", payload: menuCollection });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  // @ts-ignore
  useEffect(() => fetchMenuData(), [fetchMenuData]);

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <>{Browser}</>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
export default HerbivorousGrill;
