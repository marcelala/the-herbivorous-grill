import { useHistory, useParams } from "react-router-dom";
import { useMenu } from "../../../state/MenuStateProvider";
import iProduct from "../../../types/iProduct";
import React from "react";
import Button from "../../../components/Button";
import ProductForm from "./ProductForm";
import newProduct from "./newProduct";
import { ErrorComponent } from "../../../components/Error";
// Interface
type PropParams = {
  id: string;
  category_title: string;
  category_id: string;
};
export default function AdminProduct() {
  // @ts-ignore
  const { products } = useMenu();
  const { id, category_title, category_id } = useParams<PropParams>();
  const history = useHistory();
  const product = getProduct(id);

  if (product === undefined) return ErrorComponent;
  function getProduct(id: string) {
    const existingProduct = products.find((item: iProduct) => item.id === id);
    if (existingProduct === undefined) return newProduct;
    else return existingProduct;
  }

  return (
    <section id="admin-product">
      <h1>{category_title}</h1>
      <ProductForm product={product} category_id={category_id} />
      <div>
        <Button onClick={() => history.goBack()} theme={"primary"}>
          Go back to {category_title}
        </Button>
      </div>
    </section>
  );
}
