import React, { useState, FormEvent } from "react";
import categoryFields from "./categoryFields.json";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputImage from "../../components/InputImage";
import { useParams } from "react-router-dom";
// Interface
type PropParams = {
  category_id: string;
};
export default function CategoryForm() {
  const { category_id } = useParams<PropParams>();

  // Local state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const imageFilename = `category-${title}`;

  // Methods
  function onAddItem(event: FormEvent) {
    event.preventDefault();

    function onUpdateButton() {
      const editedCategory = {
        category_title: title,
        category_description: description,
        category_image: imageURL,
      };
      //onUpdate(id, editedCategory);
    }
    return (
      <li className="category-item">
        <form onSubmit={(event) => onAddItem(event)}>
          <InputImage
            state={[imageURL, setImageURL]}
            name={"image"}
            filename={imageFilename}
          />
          <div className="text-box">
            <Input
              hook={[title, setTitle]}
              settings={categoryFields.category_title}
            />
            <Input
              hook={[description, setDescription]}
              settings={categoryFields.category_description}
            />
          </div>
          <Button theme={"primary"} onClick={() => alert("Form submitted")}>
            Add new category
          </Button>
        </form>
      </li>
    );
  }
}
