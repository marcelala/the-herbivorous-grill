// Project files
import iProduct from "../types/iProduct";

// Interface
interface iProps {
  item: iProduct;
}

export default function ProductItem({ item }: iProps) {
  const { product_title, product_price } = item;

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
    <li>
      {/*} <button onClick={() => onDelete(id)}>Delete this</button>
      <button onClick={() => onUpdateButton()}>Update this</button>*/}
      <b>{product_title}:</b>
      <p>{product_price}</p>
    </li>
  );
}
