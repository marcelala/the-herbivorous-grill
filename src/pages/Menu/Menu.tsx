import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../../state/MenuStateProvider";
import menuImg from "../../assets/images/menuImg.png";
import iCategory from "../../types/iCategory";
import CategoryItem from "./CategoryItem";
export default function Menu() {
  // @ts-ignore
  const { menu } = useMenu();

  const CategoryItems = menu.map((item: iCategory) => (
    <Link to={`/menu/${item.category_title}/${item.id}`} key={item.id}>
      <CategoryItem item={item} />
    </Link>
  ));
  return (
    <section id="menu">
      <img src={menuImg} alt="" className={"sectionImg"} />
      <div className="text-box-section">
        <h1>Menu</h1>
        <p> Live and let live</p>
      </div>
      <ul>{CategoryItems}</ul>
    </section>
  );
}
