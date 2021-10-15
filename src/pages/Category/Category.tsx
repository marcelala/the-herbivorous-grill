import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useMenu } from "../../state/MenuStateProvider";
import iCategory from "../../types/iCategory";
import iProduct from "../../types/iProduct";
import ProductItem from "../../components/ProductItem";
import { getCollection } from "../../scripts/firebase/fireStore";
import Button from "../../components/Button";

type PropParams = {
  category_id: string;
  category_title: string;
};

export default function Category() {
  // @ts-ignore
  const { menu, products, productsDispatch } = useMenu();
  const { category_id, category_title } = useParams<PropParams>();
  const history = useHistory();
  //local state
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  const category = menu.find((item: iCategory) => item.id === category_id);
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
  // Methods
  const ProductItems = loadedProducts.map((item: iProduct) => (
    <Link
      to={`/menu/${category_title}/${category_id}/${item.id}`}
      key={item.id}
    >
      <ProductItem item={item} />
    </Link>
  ));
  return (
    <section id="category">
      <img
        src={category.category_image}
        alt={`yummy ${category_title}`}
        className="sectionImg"
      />
      <div className="text-box-section">
        <h1>{category_title}</h1>
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
