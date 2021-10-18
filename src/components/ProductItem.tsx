// Project files
import iProduct from "../types/iProduct";
import { useState } from "react";

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
