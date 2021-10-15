import React from "react";
import { useProducts } from "../../state/ProductStateProvider";
import { useHistory, useParams } from "react-router-dom";
import iProduct from "../../types/iProduct";
import ProductItem from "../../components/ProductItem";
import Button from "../../components/Button";

export default function Product() {
  // @ts-ignore
  const { products } = useProducts();
  const url = useParams();
  const history = useHistory();
  // @ts-ignore
  const selectedId = url.id;
  const selectedProduct = products.find(
    (item: iProduct) => item.id === selectedId
  );

  return (
    <section id="product">
      <ProductItem item={selectedProduct} />
      <div>
        <Button onClick={() => history.goBack()} theme={"secondary"}>
          Go back
        </Button>
      </div>
    </section>
  );
}
