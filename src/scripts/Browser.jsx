// npm Packages
import { Switch, Route, BrowserRouter } from "react-router-dom";
//project files
import ScrollToTop from "./ScrollToTop";
import { ProductStateProvider } from "../state/ProductStateProvider";
import Navigation from "../components/Navigation";
//pages
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Category from "../pages/Category/Category";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";

export const Browser = (
  <BrowserRouter>
    <ScrollToTop>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Contact} path="/contact" />
        <Route exact path="/menu" component={Menu} />
        <ProductStateProvider>
          <Route
            component={Category}
            exact
            path="/menu/:category_title/:category_id"
          />
          <Route
            component={Product}
            path="/menu/:category_title/:category_id/:id"
          />
        </ProductStateProvider>
        <Route path="*" component={Home} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);
