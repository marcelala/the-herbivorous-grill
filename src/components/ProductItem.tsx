// Project files
import iProduct from "../types/iProduct";
import Button from "./Button";
import { useState } from "react";

// Interface
interface iProps {
  item: iProduct;
}

export default function ProductItem({ item }: iProps) {
  const { product_title, product_price, image_url } = item;
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
  return (
    <li className="product-item">
      <img src={""} alt="delicious foods and beautiful drinks" />
      {/*} <button onClick={() => onDelete(id)}>Delete this</button>
      <button onClick={() => onUpdateButton()}>Update this</button>*/}
      <b>{product_title}:</b>
      <p>{product_price}</p>
      <Button theme={"secondary"} onClick={() => console.log(product_title)}>
        View
      </Button>
    </li>
  );
}
