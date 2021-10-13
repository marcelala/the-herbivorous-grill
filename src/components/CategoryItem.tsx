import { useState } from "react";

// Project files
import iCategory from "../types/iCategory";
import Button from "./Button";

// Interface
interface iProps {
  item: iCategory;
}

export default function CategoryItem({ item }: iProps) {
  const { id, category_title, category_description, category_image } = item;
  const [imageUrl, setImageUrl] = useState(category_image);

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
      <img src={imageUrl} alt="delicious foods and beautiful drinks" />
      <div className="text-box">
        <h1>{category_title}:</h1>
        <p>{category_description}</p>
      </div>
      <Button theme={"secondary"} onClick={() => console.log(category_title)}>
        View {category_title}
      </Button>
    </li>
  );
}
