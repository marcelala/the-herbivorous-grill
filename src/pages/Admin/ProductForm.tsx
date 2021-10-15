import React, { useState, FormEvent } from "react";
import productFields from "./productFields.json";
import InputImage from "../../components/InputImage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import iProduct from "../../types/iProduct";
// Interface
interface iProps {
  product: iProduct;
  settings: {
    autocomplete: string;
    autofocus: false;
    name: string;
    placeholder: string;
    type: string;
  };
}

export default function ProductForm({ settings, product }: iProps) {
  const { id, product_price, product_title, product_description, image_url } =
    product;

  const { autocomplete, autofocus, name, placeholder, type } = settings;

  // Local state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");

  // Methods
  function onAddItem(event: FormEvent) {
    event.preventDefault();

    return (
      <li className="product-item">
        <form onSubmit={(event) => onAddItem(event)}>
          <InputImage
            state={[imageURL, setImageURL]}
            name={"image"}
            filename={product.image_url}
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
            hook={[ingredients, setIngredients]}
            settings={productFields.ingredients}
          />
          <Button theme={"primary"} onClick={() => alert("Form submitted")}>
            Add new category
          </Button>
        </form>
      </li>
    );
  }
}
