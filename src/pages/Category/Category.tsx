import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMenu } from "../../state/MenuStateProvider";
import iCategory from "../../types/iCategory";
import iProduct from "../../types/iProduct";
import ProductItem from "../../components/ProductItem";
import { useProducts } from "../../state/ProductStateProvider";
import { getCollection } from "../../scripts/fireStore";

export function Category() {
  // @ts-ignore
  const { menu } = useMenu();
  // @ts-ignore
  const { products, productsDispatch } = useProducts();
  const url = useParams();
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error
  // @ts-ignore
  const selectedId = url.category_id;
  const selectedCategory = menu.find(
    (item: iCategory) => item.id === selectedId
  );

  // Properties
  const path = `menu/${selectedId}/products/`;

  // Methods
  const fetchData = useCallback(
    async (path) => {
      try {
        // @ts-ignore
        const collection = await getCollection(path);
        productsDispatch({ type: "SET_PRODUCTS", payload: collection });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [productsDispatch]
  );

  // @ts-ignore
  useEffect(() => fetchData(path), [fetchData, path]);

  // Methods
  const ProductItems = products.map((item: iProduct) => (
    <Link
      to={`/menu/${selectedCategory.category_title}/${selectedId}/${item.id}`}
      key={item.id}
    >
      <ProductItem key={item.id} item={item} />
    </Link>
  ));

  return (
    <section id="category">
      <img
        src={selectedCategory.category_image}
        alt={`yummy ${selectedCategory.category_title}`}
      />
      <div className="text-box-section">
        <h1>{selectedCategory.category_title}</h1>
        <p> {selectedCategory.category_description}</p>
      </div>
      <div>
        {status === 0 && <p>Loading ⏱</p>}
        {status === 1 && <ul className="product-cards">{ProductItems}</ul>}
        {status === 2 && <p>Error 🚨</p>}
      </div>
    </section>
  );
}
