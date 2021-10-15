// npm Packages
import { Switch, Route, BrowserRouter } from "react-router-dom";
//project files
import ScrollToTop from "../scripts/ScrollToTop";
import { ProductStateProvider } from "../state/ProductStateProvider";
import Navigation from "./Navigation";
//pages
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Category from "../pages/Category/Category";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Page404 from "../pages/404/Page404";
import AdminDashboard from "../pages/Admin/AdminDashboard";

export const Browser = (
  <BrowserRouter>
    <ScrollToTop>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Contact} path="/contact" />
        <Route component={AdminDashboard} path="/admin-dashboard" />
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
        <Route path="*" component={Page404} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);
