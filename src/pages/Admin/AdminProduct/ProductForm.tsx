import React, { useState, FormEvent } from "react";
import productFields from "../../../data/productFields.json";
import InputImage from "../InputImage";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import iProduct from "../../../types/iProduct";
// Interface
interface iProps {
  product: iProduct;
  id: string;
}

export default function ProductForm({ product, id }: iProps) {
  const {
    product_price,
    product_title,
    product_description,
    image_url,
    ingredients,
  } = product;

  // Local state
  const [title, setTitle] = useState(product_title);
  const [description, setDescription] = useState(product_description);
  const [imageURL, setImageURL] = useState(image_url);
  const [price, setPrice] = useState(product_price.toString());
  const [ingredientsList, setIngredients] = useState(ingredients.toString());

  // Methods
  function onAddItem(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <li className="product-item">
      <form onSubmit={(event) => onAddItem(event)}>
        <InputImage
          state={[imageURL, setImageURL]}
          name={"image"}
          filename={image_url}
        />
        <div className="text-box">
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
        </div>
        <Input
          hook={[ingredientsList, setIngredients]}
          settings={productFields.ingredients}
        />
        <Button theme={"primary"} onClick={() => alert("Form submitted")}>
          Add new category
        </Button>
      </form>
    </li>
  );
}
