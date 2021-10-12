import iCategory from "../../types/iCategory";
import CategoryItem from "../../components/CategoryItem";
import { useMenu } from "../../state/MenuStateProvider";
import logo from "../../assets/images/logo.svg";

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
  return (
    <section id="home">
      <img src={logo} alt="icon of a small plant in a pot" />
      <h1 className=" brand">The Herbivorous Grill</h1>
      <div className=" container">
        <h2>Peace begins in your plate</h2>
      </div>
      {CategoryItems}
    </section>
  );
}
