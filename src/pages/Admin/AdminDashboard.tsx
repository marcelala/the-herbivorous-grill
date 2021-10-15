import React, { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import iProduct from "../../types/iProduct";
import useFetch from "../../scripts/useFetch";
import { useMenu } from "../../state/MenuStateProvider";
import { useProducts } from "../../state/ProductStateProvider";
import iCategory from "../../types/iCategory";
import CategoryItem from "../../components/CategoryItem";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  // @ts-ignore
  const { menu, dispatch } = useMenu();
  const fetchedMenu = useFetch("menu");
  const [localMenu, setLocalMenu] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => setLocalMenu(fetchedMenu), []);
  useEffect(() => {
    //@ts-ignore
    setStatus("data updated");
    dispatch({ type: "SET_MENU", payload: localMenu });
  }, [localMenu]);
  console.log(menu);

  //const fetchedProducts = useFetch("products");
  //local state
  //const [localProducts, setLocalProducts] = useState(fetchedProducts.data);
  /*
  useEffect(() => {
    productsDispatch({ type: "SET_PRODUCTS", payload: localProducts });
  }, [localProducts]);
*/
  //console.log(fetchedProducts.data);
  const CategoryList = menu.map((item: iCategory) => (
    <div className="edit-container" key={item.id}>
      <CategoryItem item={item} />
      <div className="btn-container">
        <Button theme={"primary"} onClick={() => console.log("edit category")}>
          Edit category
        </Button>
        <Link to="admin-dashboard/products" className="btn btn-secondary">
          {" "}
          Manage products
        </Link>
      </div>
    </div>
  ));

  return (
    <section id="admin-dashboard">
      <div className="text-box-section">
        <h2> Welcome to</h2>
        <h1>Product Management</h1>
        <p>
          Here you can view the list the menu's categories. Press the add button
          to create a new one. Or click on each category to edit or delete it.
        </p>
      </div>
      <Button theme={"add"} onClick={() => console.log("add button")}>
        {" "}
        Add new category
      </Button>
      {menu.length === 0 && <p>🚨 Please add a category to start.</p>}
      {menu.length > 0 && <ul> {CategoryList} </ul>}
    </section>
  );
}
