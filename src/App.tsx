// NPM packages
// @ts-ignore
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore/lite";
// Project files
//scripts
import { useMenu } from "./state/MenuStateProvider";
import { ProductStateProvider } from "./state/ProductStateProvider";
import { firebaseInstance } from "./scripts/firebase";
import { deleteDocument, updateDocument } from "./scripts/fireStore";
//components
import Navigation from "./components/Navigation";
//pages
import Home from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { Category } from "./pages/Category/Category";
import { Product } from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";

function HerbivorousGrill() {
  // Global state
  // @ts-ignore
  const { status } = useMenu();
  // Properties
  const database = getFirestore(firebaseInstance);

  // Methods
  function onDelete(id: string) {
    deleteDocument(database, "menu", id);
  }

  function onUpdate(id: string, editedCategory: object) {
    updateDocument(database, "menu", id, editedCategory);
  }

  // Component
  const Browser = (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Contact} path="/contact" />
        <Route component={Menu} exact path="/menu" />
        <ProductStateProvider>
          <Route
            component={Category}
            path="/menu/:category_title/:category_id"
          />
          <Route
            component={Product}
            path="/menu/:category_title/:category_id/:product_title/:product_id"
          />
        </ProductStateProvider>
      </Switch>
    </BrowserRouter>
  );

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <>{Browser}</>}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
export default HerbivorousGrill;
