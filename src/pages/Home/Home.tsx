import iCategory from "../../types/iCategory";
import CategoryItem from "../../components/CategoryItem";
import { useMenu } from "../../state/MenuStateProvider";

// @ts-ignore
export default function Home({ onDelete, onUpdate }) {
  // @ts-ignore
  const { menu } = useMenu();

  const CategoryItems = menu.map((item: iCategory) => (
    <CategoryItem
      key={item.id}
      item={item}
      onDelete={onDelete}
      onUpdate={onUpdate}
    />
  ));
  return <section id="home">{CategoryItems}</section>;
}
