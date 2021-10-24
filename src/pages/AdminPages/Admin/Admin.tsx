import React, { useState } from "react";
import { useMenu } from "../../../state/MenuStateProvider";
import AdminMenu from "./AdminMenu";
import Button from "../../../components/Button";
import CategoryForm from "../AdminCategory/CategoryForm";
import newCategory from "../AdminCategory/newCategory";

export default function Admin() {
  // @ts-ignore
  const { menu } = useMenu();
  // const [loadedProducts, setLoadedProducts] = useState([]); // No commented code in production -1
  const [addItem, setAddItem] = useState(false);

  // No commented code in production -1
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

  return (
    <section id="admin-dashboard">
      <div className="text-box-section">
        <h2> Welcome to</h2>
        <h1>Menu Management</h1>
        <p>
          Here you can view the list the menu's categories. Press the add button
          to create a new one. Or click on each category to edit it.
        </p>
      </div>
      {/* There should no be empty space (curly brace "") to add space, use margin or padding in CSS */}
      <Button theme={"primary"} onClick={() => setAddItem(!addItem)}>
        {" "}
        Add new category
      </Button>
      {addItem && <CategoryForm item={newCategory} id={newCategory.id} />}
      {menu.length === 0 && <p>🚨 Please add a category to start.</p>}
      <AdminMenu />
    </section>
  );
}
