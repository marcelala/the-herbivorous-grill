import React, { useCallback, useEffect, useState } from "react";
import { useMenu } from "../../state/MenuStateProvider";
import { Link, useParams } from "react-router-dom";
import { getSubCollection } from "../../scripts/firebase/fireStore";
import iProduct from "../../types/iProduct";
import ProductItem from "../../components/ProductItem";
import EditCategory from "./AdminCategory/EditCategory";
import Button from "../../components/Button";
import CategoryForm from "./AdminCategory/CategoryForm";
import newCategory from "./AdminCategory/newCategory";

export default function AdminDashboard() {
  // @ts-ignore
  const { menu, productsDispatch, products } = useMenu();

  // const [loadedProducts, setLoadedProducts] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const [addItem, setAddItem] = useState(false);
  // // Methods
  /*const fetchProductsData = useCallback(async () => {
    const path = "menu/any/products";
    try {
      // @ts-ignore
      const productsCollection = await getSubCollection(path);
      // @ts-ignore
      //console.log(productsCollection);
      // @ts-ignore
      setLoadedProducts(productsCollection);
      console.log(loadedProducts);
      productsDispatch({ type: "SET_PRODUCTS", payload: productsCollection });
      setStatus(1);
      console.log(products);
    } catch {
      setStatus(2);
    }
  }, []);

  // @ts-ignore
  useEffect(() => fetchProductsData(), []);*/

  //component
  const ProductItems = products.map((item: iProduct) => (
    <ProductItem item={item} key={item.id} />
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
      <Button theme={"primary"} onClick={() => setAddItem(!addItem)}>
        {" "}
        Add new category
      </Button>
      {addItem && <CategoryForm item={newCategory} id={newCategory.id} />}
      {menu.length === 0 && <p>🚨 Please add a category to start.</p>}
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <>{ProductItems}</>}
      {status === 2 && <p>Error 🚨</p>}
      <EditCategory />
    </section>
  );
}
