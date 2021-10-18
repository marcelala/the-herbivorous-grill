import React, { useState, FormEvent, Props } from "react";
import categoryFields from "../../../data/categoryFields.json";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import InputImage from "../InputImage";
import { useParams } from "react-router-dom";
import { useMenu } from "../../../state/MenuStateProvider";
import {
  createDocument,
  updateDocument,
} from "../../../scripts/firebase/fireStore";
import iCategory from "../../../types/iCategory";
interface iProps {
  item: iCategory;
  id: string;
}
export default function CategoryForm({ item, id }: iProps) {
  //@ts-ignore
  const { menuDispatch } = useMenu();
  const { category_image, category_title, category_description } = item;
  // Local state
  const [title, setTitle] = useState(category_title);
  const [description, setDescription] = useState(category_description);
  const [imageURL, setImageURL] = useState(category_image);

  // @ts-ignore
  async function onAdd(item) {
    menuDispatch({ type: "ADD_ITEM", payload: item });
  }
  // @ts-ignore
  async function onUpdate(item) {
    menuDispatch({ type: "EDIT_ITEM", payload: item });
  }
  // Methods
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const path = "menu";
    const editedCategory = {
      category_title: title,
      category_description: description,
      category_image: imageURL,
    };
    if (id !== "") {
      await updateDocument(path, id, editedCategory);
      onUpdate(editedCategory);
    } else {
      await createDocument(path, editedCategory);
      console.log("updated category", editedCategory);
      onAdd(editedCategory);
    }
  }

  return (
    <section id="admin-form">
      <form onSubmit={(event) => onSubmit(event)}>
        <InputImage state={imageURL} onChange={setImageURL} />
        <Input
          hook={[title, setTitle]}
          settings={categoryFields.category_title}
        />
        <Input
          hook={[description, setDescription]}
          settings={categoryFields.category_description}
        />
        <Button theme={"primary"} onClick={() => alert("Form submitted")}>
          Save changes
        </Button>
      </form>
    </section>
  );
}
