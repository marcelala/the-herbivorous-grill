export default interface iProduct {
  id: string;
  product_title: string;
  product_price: number;
  image_url: string;
  product_description: string;
  ingredients: Array<String>;
}
