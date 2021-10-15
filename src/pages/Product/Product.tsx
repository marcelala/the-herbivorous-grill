import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
//project files
import { useMenu } from "../../state/MenuStateProvider";
import iProduct from "../../types/iProduct";
import ProductItem from "../../components/ProductItem";
import Button from "../../components/Button";
// Interface
type PropParams = {
  id: string;
  category_title: string;
  category_id: string;
};
export default function Product() {
  // @ts-ignore
  const { products } = useMenu();
  const { id, category_title, category_id } = useParams<PropParams>();
  const history = useHistory();
  const product = products.find((item: iProduct) => item.id === id);
  const { product_description, ingredients } = product;
  // Components
  const ErrorComponent = (
    <p>
      Oops, something went wrong. Please return to the home page and try again{" "}
      <Link to="/">Go home</Link>
    </p>
  );
  if (product === undefined) return ErrorComponent;

  function ingredientsList() {
    if (ingredients === undefined) return <p>No ingredient list to show</p>;
    else return ingredients.map((item: string) => <li>{item}</li>);
  }
  return (
    <section id="product">
      <ProductItem item={product} />
      <p>{product_description}</p>
      <ul>{ingredientsList()}</ul>
      <div>
        <Button onClick={() => history.goBack()} theme={"primary"}>
          Go back to {category_title}
        </Button>
      </div>
    </section>
  );
}
