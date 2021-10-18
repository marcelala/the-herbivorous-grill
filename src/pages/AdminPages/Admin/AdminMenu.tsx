//npm packages
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
//project files
import iCategory from "../../../types/iCategory";
import Button from "components/Button";
import CategoryItem from "../../../components/CategoryItem";
import CategoryForm from "../AdminCategory/CategoryForm";
import newCategory from "../AdminCategory/newCategory";
import { useMenu } from "../../../state/MenuStateProvider";
type PropParams = {
  category_id: string;
};
type iProps = {
  category: iCategory;
  setCategory: Function;
};
export default function AdminMenu() {
  // @ts-ignore
  const { menu } = useMenu();
  const { category_id } = useParams<PropParams>();
  const category = getCategory(category_id);
  const [editMode, setEditMode] = useState(false);
  function getCategory(category_id: string) {
    const existingCategory = menu.find(
      (item: iCategory) => item.id === category_id
    );
    if (existingCategory === undefined) return newCategory;
    else return existingCategory;
  }
  //
  const CategoryList = menu.map((item: iCategory) => (
    <div className="edit-container" key={item.id}>
      <CategoryItem item={item} />
      {editMode && <CategoryForm item={item} id={item.id} />}
      <div className="btn-container">
        <Button
          theme={"primary"}
          onClick={(event: any) => setEditMode(!editMode)}
        >
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

  return (
    <section id="admin-dashboard">
      {menu.length === 0 && <p>🚨 Please add a category to start.</p>}

      <ul> {CategoryList} </ul>
    </section>
  );
}
