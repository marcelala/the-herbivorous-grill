//npm packages
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
//project files
import iCategory from "../../../types/iCategory";
import Button from "components/Button";
import CategoryItem from "../../Menu/CategoryItem";
import CategoryForm from "./CategoryForm";
import newCategory from "./newCategory";
import { useMenu } from "../../../state/MenuStateProvider";
type PropParams = {
  id: string;
};

export default function EditCategory() {
  // @ts-ignore
  const { menu } = useMenu();
  const { id } = useParams<PropParams>();

  const [editMode, setEditMode] = useState(false);

  const selectedCategory = getCategory(id);

  const CategoryList = menu.map((item: iCategory) => (
    <div className="edit-container" key={item.id}>
      <CategoryItem item={item} />
      {editMode && (
        <CategoryForm item={selectedCategory} id={selectedCategory.id} />
      )}
      <div className="btn-container">
        <Button theme={"primary"} onClick={(event: any) => setEditMode(true)}>
          Edit category
        </Button>
        <Link
          to={`/admin/${item.category_title}/${item.id}/`}
          className="btn btn-secondary"
        >
          Manage products
        </Link>
      </div>
    </div>
  ));

  function getCategory(category_id: string) {
    const oldCategory = menu.find((item: iCategory) => item.id === category_id);
    if (oldCategory === undefined) return newCategory;
    else return oldCategory;
  }

  return (
    <section id="admin-dashboard">
      {menu.length === 0 && <p>🚨 Please add a category to start.</p>}

      <ul> {CategoryList} </ul>
    </section>
  );
}
