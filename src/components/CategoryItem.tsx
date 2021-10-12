import { useCallback, useEffect, useState } from "react";

// Project files
import iCategory from "../types/iCategory";
import iProduct from "../types/iProduct";
import ProductItem from "./ProductItem";
import { getCollection } from "../scripts/fireStore";
import { getFirestore } from "firebase/firestore/lite";
import { firebaseInstance } from "../scripts/firebase";

// Interface
interface iProps {
  item: iCategory;
}

export default function CategoryItem({ item }: iProps) {
  const { id, category_title, category_description, category_image } = item;
  const [productList, setProductList] = useState(Array<iProduct>());
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error
  // Properties
  const database = getFirestore(firebaseInstance);
  // Methods
  const productsCallback = useCallback(async () => {
    const collection = await getCollection(`menu/${id}/products/`);
    setProductList(collection as unknown as iProduct[]);
    setStatus(1);
  }, [id, database]);

  useEffect(() => {
    productsCallback();
  }, [productsCallback]);

  function onUpdateButton() {
    const editedCategory = {
      category_title: category_title,
      category_description: category_description,
      category_image: category_image,
      products: productList,
    };
    //onUpdate(id, editedCategory);
  }

  // Components
  const ProductList = productList.map((product) => (
    <ProductItem key={product.id} item={product} />
  ));
  return (
    <li className="category-item">
      {/*<button onClick={() => onDelete(id)}>Delete it</button>
      <button onClick={() => onUpdateButton()}>Update it</button>*/}
      <img src={category_image} alt="delicious foods and beautiful drinks" />
      <b>{category_title}:</b>
      {category_description}
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <ul>{ProductList}</ul>}
      {status === 2 && <p>Error 🚨</p>}
    </li>
  );
}
