import iProduct from "./iProduct";

export default interface iCategory {
  id: string;
  category_title: string;
  category_description: string;
  image_url: string;
  products: iProduct[];
}
