import React from "react";
import { useProducts } from "../../state/ProductStateProvider";
import { useHistory, useParams } from "react-router-dom";
import iProduct from "../../types/iProduct";
import ProductItem from "../../components/ProductItem";
import Button from "../../components/Button";
import PropsProduct from "../../types/PropsProduct";
// Interface
type PropParams = {
  id: string;
  category_title: string;
};

export default function Product({ product }: PropsProduct) {
  // @ts-ignore
  const { products } = useProducts();
  const url = useParams<PropParams>();
  const history = useHistory();

  const selectedId = url.id;
  // @ts-ignore
  const selectedProduct = products.find(
    (item: iProduct) => item.id === selectedId
  );
  const { product_description, ingredients } = selectedProduct;

  //const ingredientsList = ingredients.map((item: string) => <li>{item}</li>);

  if (selectedProduct === undefined)
    return <p className="container">No product found</p>;

  return (
    <section id="product">
      <ProductItem item={selectedProduct} />
      <p>{product_description}</p>
      <div>
        <Button onClick={() => history.goBack()} theme={"primary"}>
          Go back to {url.category_title}
        </Button>
      </div>
    </section>
  );
}
