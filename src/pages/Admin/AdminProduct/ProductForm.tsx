import React, { useState, FormEvent } from "react";
import productFields from "../../../data/productFields.json";
import InputImage from "../InputImage";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import iProduct from "../../../types/iProduct";
import newProduct from "./newProduct";
import {
  createDocument,
  updateDocument,
} from "../../../scripts/firebase/fireStore";
// Interface
interface iProps {
  product: any;
  category_id: string;
}

export default function ProductForm({ product, category_id }: iProps) {
  const {
    product_price,
    product_title,
    product_description,
    image_url,
    ingredients,
    id,
  } = product;

  // Local state
  const [title, setTitle] = useState(product_title);
  const [description, setDescription] = useState(product_description);
  const [imageURL, setImageURL] = useState(image_url);
  const [price, setPrice] = useState(product_price);
  const [ingredientsList, setIngredients] = useState(
    ingredients && ingredients.join(",") + newProduct.ingredients
  );

  // Methods
  function onAddItem(event: FormEvent) {
    event.preventDefault();
  }

  async function onSave() {
    const ingredientsArray =
      ingredients.length > 0
        ? ingredients.split(",").map((item: string) => item.trim())
        : [];

    const path = `menu/${category_id}/products/`;
    const editedProduct = {
      image_url: imageURL,
      product_title: title,
      product_price: price,
      product_description: description,
      ingredients: ingredientsArray,
    };

    if (id !== "") await updateDocument(path, id, { editedProduct });
    else await createDocument(path, editedProduct);
  }
  return (
    <section id="admin-form">
      <form onSubmit={(event) => onAddItem(event)}>
        <InputImage state={imageURL} onChange={setImageURL} />
        <Input
          hook={[title, setTitle]}
          settings={productFields.product_title}
        />
        <Input
          hook={[description, setDescription]}
          settings={productFields.product_description}
        />
        <Input
          hook={[price, setPrice]}
          settings={productFields.product_price}
        />
        <Input
          hook={[ingredientsList, setIngredients]}
          settings={productFields.ingredients}
        />{" "}
        <Button theme={"primary"} onClick={() => alert("Form submitted")}>
          Save changes
        </Button>
      </form>
    </section>
  );
}
