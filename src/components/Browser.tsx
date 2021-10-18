// npm Packages
import { Switch, Route, BrowserRouter } from "react-router-dom";
//project files
///components
import ScrollToTop from "./ScrollToTop";
import Navigation from "./Navigation";
import Footer from "./Footer";
///pages
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Category from "../pages/Category/Category";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Page404 from "../pages/404/Page404";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminProducts from "../pages/Admin/AdminProduct/AdminProducts";
import AdminProduct from "../pages/Admin/AdminProduct/AdminProduct";

export const Browser = (
  <BrowserRouter>
    <ScrollToTop>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route
          path="/admin/:category_title/:category_id/"
          exact
          component={AdminProducts}
        />
        <Route
          path="/admin/:category_title/:category_id/:id"
          component={AdminProduct}
        />
        <Route exact path="/menu" component={Menu} />
        <Route
          component={Category}
          exact
          path="/menu/:category_title/:category_id"
        />
        <Route
          component={Product}
          path="/menu/:category_title/:category_id/:id"
        />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
);
