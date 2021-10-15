// Project files
import iProduct from "../types/iProduct";
import Button from "./Button";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// Interface
interface iProps {
  item: iProduct;
}

export default function ProductItem({ item }: iProps) {
  const { product_title, product_price, image_url } = item;
  const [productImageUrl] = useState(image_url);

  function handleClick() {
    console.log("clicked product button");
  }
  // Methods

  {
    /*function onUpdateButton() {
    const editedProduct = {
      id: id,
      productTitle: product_title,
      productPrice: product_price,
    };
    onUpdate(id, editedProduct);
  }*/
  }
  {
    /*} <button onClick={() => onDelete(id)}>Delete this</button>
      <button onClick={() => onUpdateButton()}>Update this</button>*/
  }
  return (
    <li className="product-item">
      <img src={productImageUrl} alt="delicious foods and beautiful drinks" />
      <div className="text-box">
        <h2>{product_title}</h2>
        <p>{product_price} sek</p>
      </div>
      <div className="btn btn-secondary">View</div>
      <span className="card" />
    </li>
  );
}
