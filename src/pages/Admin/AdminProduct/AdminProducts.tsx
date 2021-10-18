import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import ProductItem from "../../../components/ProductItem";
import iProduct from "../../../types/iProduct";
import { useMenu } from "../../../state/MenuStateProvider";
import iCategory from "../../../types/iCategory";
import CategoryItem from "../../Menu/CategoryItem";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { getCollection } from "../../../scripts/firebase/fireStore";

export default function AdminProducts() {
  // @ts-ignore
  const { productsDispatch, products } = useMenu();
  const [loadedProducts, setLoadedProducts] = useState(products);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  //component
  const ErrorComponent = (
    <p>
      Ooops, something went wrong.Please go to the home page and try again{" "}
      <Link to="/">Go home</Link>
    </p>
  );
  function ProductsList() {
    const list = products.map((item: iProduct) => (
      <div className="edit-container" key={item.id}>
        <ProductItem item={item} />
        <div className="btn-container">
          <Button theme={"primary"} onClick={() => console.log("edit product")}>
            Edit product
          </Button>
        </div>
      </div>
    ));
    if (list === undefined) return ErrorComponent;
    else return list;
  }

  return (
    <section id="products products-editable">
      <h1> Product Management</h1>
      <ul>{ProductsList()}</ul>
    </section>
  );
}
