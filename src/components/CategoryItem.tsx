//dependencies
import { useState } from "react";
// project files
import iCategory from "../types/iCategory";
// interface
interface iProps {
  item: iCategory;
}

export default function CategoryItem({ item }: iProps) {
  const { category_title, category_description, category_image } = item;
  const [categoryImageUrl] = useState(category_image);

  return (
    <li className="category-item">
      {/*<button onClick={() => onDelete(id)}>Delete it</button>
      <button onClick={() => onUpdateButton()}>Update it</button>*/}
      <img src={categoryImageUrl} alt="delicious foods and beautiful drinks" />
      <div className="text-box">
        <h1>{category_title}</h1>
        <p>{category_description}</p>
      </div>
      <div className="btn btn-secondary">
        <p>View {category_title}</p>
      </div>
    </li>
  );
}
