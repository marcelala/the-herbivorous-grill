import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useMenu } from "../../state/MenuStateProvider";
import iCategory from "../../types/iCategory";
import iProduct from "../../types/iProduct";
import ProductItem from "../../components/ProductItem";
import { useProducts } from "../../state/ProductStateProvider";
import { getCollection } from "../../scripts/firebase/fireStore";
import Button from "../../components/Button";
type PropParams = {
  category_id: string;
  category_title: string;
};

export default function Category() {
  // @ts-ignore
  const { menu } = useMenu();
  // @ts-ignore
  const { products, productsDispatch } = useProducts();

  const url = useParams<PropParams>();
  const history = useHistory();
  // 0 loading, 1 loaded, 2 error
  const [status, setStatus] = useState(0);
  // @ts-ignore
  const selectedId = url.category_id;
  const category = menu.find((item: iCategory) => item.id === selectedId);
  const [loadedCategory, setLoadedCategory] = useState(category);

  // Properties
  const path = `menu/${selectedId}/products/`;
  // Methods
  const fetchData = useCallback(
    async (path) => {
      try {
        // @ts-ignore
        const productsCollection = await getCollection(path);
        // @ts-ignore
        setLoadedCategory(productsCollection);
        productsDispatch({ type: "SET_PRODUCTS", payload: productsCollection });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [productsDispatch]
  );
  // @ts-ignore
  useEffect(() => fetchData(path), [fetchData]);

  // Methods
  const ProductItems = products.map((item: iProduct) => (
    <Link
      to={`/menu/${category.category_title}/${selectedId}/${item.id}`}
      key={item.id}
    >
      <ProductItem key={item.id} item={item} />
    </Link>
  ));
  console.log(loadedCategory);
  return (
    <section id="category">
      <img
        src={category.category_image}
        alt={`yummy ${category.category_title}`}
        className="sectionImg"
      />
      <div className="text-box-section">
        <h1>{category.category_title}</h1>
        <p> {category.category_description}</p>
      </div>
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <ul className="product-cards">{ProductItems}</ul>}
      {status === 2 && <p>Error 🚨</p>}
      <div>
        <Button onClick={() => history.goBack()} theme={"primary"}>
          Return to Menu
        </Button>
      </div>
    </section>
  );
}
