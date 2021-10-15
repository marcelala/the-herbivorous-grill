import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import ProductItem from "../../components/ProductItem";
import iProduct from "../../types/iProduct";
import { useMenu } from "../../state/MenuStateProvider";
import iCategory from "../../types/iCategory";
import CategoryItem from "../../components/CategoryItem";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { getCollection } from "../../scripts/firebase/fireStore";

export default function AdminDashboard() {
  // @ts-ignore
  const { menu, productsDispatch } = useMenu();
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  // Methods
  const fetchData = useCallback(async (category_id) => {
    const path = `menu/${category_id}/products/`;
    try {
      // @ts-ignore
      const productsCollection = await getCollection(path);
      // @ts-ignore
      setLoadedProducts(productsCollection);
      productsDispatch({ type: "SET_PRODUCTS", payload: productsCollection });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  //component
  const CategoryList = menu.map((item: iCategory) => (
    <div className="edit-container" key={item.id}>
      <CategoryItem item={item} />
      <div className="btn-container">
        <Button theme={"primary"} onClick={() => console.log("edit category")}>
          Edit category
        </Button>
        <Link
          to="admin-dashboard/products/:category_id"
          className="btn btn-secondary"
        >
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
        <h1>Menu Management</h1>
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
