import React, { useState, FormEvent, Props } from "react";
import categoryFields from "../../../data/categoryFields.json";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import InputImage from "../InputImage";
import { useParams } from "react-router-dom";
import { useMenu } from "../../../state/MenuStateProvider";
import { createDoc, updateDocument } from "../../../scripts/firebase/fireStore";
import { fireStoreInstance } from "../../../scripts/firebase/firebase";
import iCategory from "../../../types/iCategory";

export default function CategoryForm(item: any, id: string) {
  //@ts-ignore
  const { menuDispatch } = useMenu();
  const { category_image, category_title, category_description } = item;
  // Local state
  const [title, setTitle] = useState(category_title);
  const [description, setDescription] = useState(category_description);
  const [imageURL, setImageURL] = useState(category_image);
  const imageFilename = `category-${title}`;

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
      await updateDocument(fireStoreInstance, path, id, editedCategory);
      onUpdate(editedCategory);
    } else {
      await createDoc(path, editedCategory);
      console.log("updated category", editedCategory);
      onAdd(editedCategory);
    }
  }

  return (
    <section id="admin-form">
      <form onSubmit={(event) => onSubmit(event)}>
        <InputImage
          state={[imageURL, setImageURL]}
          name={"image"}
          filename={imageFilename}
        />
        <Input
          hook={[title, setTitle]}
          settings={categoryFields.category_title}
        />
        <Input
          hook={[description, setDescription]}
          settings={categoryFields.category_description}
        />
        <Button theme={"primary"} onClick={() => alert("Form submitted")}>
          Submit
        </Button>
      </form>
    </section>
  );
}
