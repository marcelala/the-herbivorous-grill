import React from "react";
import { useMenu } from "../../state/MenuStateProvider";
import iCategory from "../../types/iCategory";
import CategoryItem from "../../components/CategoryItem";
export function Menu() {
  // @ts-ignore
  const { menu } = useMenu();

  const CategoryItems = menu.map((item: iCategory) => (
    <CategoryItem key={item.id} item={item} />
  ));
  return (
    <section id="menu">
      <ul>{CategoryItems}</ul>
    </section>
  );
}
