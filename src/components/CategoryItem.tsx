//dependencies
import { useState } from "react";
// project files
import iCategory from "../types/iCategory";
import Button from "./Button";
// interface
interface iProps {
  item: iCategory;
}

export default function CategoryItem({ item }: iProps) {
  const { category_title, category_description, category_image } = item;
  const [categoryImageUrl] = useState(category_image);

  function onUpdateButton() {
    const editedCategory = {
      category_title: category_title,
      category_description: category_description,
      category_image: category_image,
    };
    //onUpdate(id, editedCategory);
  }
  return (
    <li className="category-item">
      {/*<button onClick={() => onDelete(id)}>Delete it</button>
      <button onClick={() => onUpdateButton()}>Update it</button>*/}
      <img src={categoryImageUrl} alt="delicious foods and beautiful drinks" />
      <div className="text-box">
        <h1>{category_title}</h1>
        <p>{category_description}</p>
      </div>
      <Button theme={"secondary"} onClick={() => console.log(category_title)}>
        View {category_title}
      </Button>
    </li>
  );
}
