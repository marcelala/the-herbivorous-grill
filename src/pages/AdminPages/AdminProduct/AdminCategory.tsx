//dependencies
import React, { useCallback, useEffect, useState } from "react";
import { getCollection } from "../../../scripts/firebase/fireStore";
import { Link, useHistory, useParams } from "react-router-dom";

//project files
import { useMenu } from "../../../state/MenuStateProvider";
import iProduct from "../../../types/iProduct";
import ProductItem from "../../../components/ProductItem";
import Button from "../../../components/Button";
import ProductForm from "./ProductForm";
import newProduct from "./newProduct";

type PropParams = {
  category_id: string;
  category_title: string;
};
export default function AdminCategory() {
  // @ts-ignore
  const { products, productsDispatch } = useMenu();
  const { category_id, category_title } = useParams<PropParams>();
  const history = useHistory();
  //local state
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const [addItem, setAddItem] = useState(false);
  // Properties
  const path = `menu/${category_id}/products/`;
  // Methods
  const fetchData = useCallback(async (path) => {
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
  // @ts-ignore
  useEffect(() => fetchData(path), [fetchData]);

  //component
  const ErrorComponent = (
    <p>
      Ooops, something went wrong.Please go to the home page and try again{" "}
      <Link to="/">Go home</Link>
    </p>
  );

  //methods
  function ProductsList() {
    const list = products.map((item: iProduct) => (
      <div className="edit-container" key={item.id}>
        <ProductItem item={item} />
        <Link to={`${item.id}`}>Edit product</Link>
      </div>
    ));
    if (list === undefined) return ErrorComponent;
    else return list;
  }
  return (
    <section id="category " className={"admin-products"}>
      <div className="text-box-section">
        <h2> Welcome to</h2>
        <h1>Products Management</h1>
        <p>
          Here you can view the list a category's products. Press the add button
          to create a new one. Or click on each product to edit it.
        </p>
      </div>
      <Button theme={"primary"} onClick={() => setAddItem(!addItem)}>
        {" "}
        Add new category
      </Button>
      {addItem && (
        <ProductForm product={newProduct} category_id={category_id} />
      )}
      <h1>{category_title}</h1>
      <ul className={"admin-list"}>{ProductsList()}</ul>
      <div>
        <Button onClick={() => history.goBack()} theme={"primary"}>
          Go back
        </Button>
      </div>
    </section>
  );
}
