import iCategory from "../../../types/iCategory";
import iProduct from "../../../types/iProduct";

// Good use of a separate file to avoid this 6 lines inside the reacr component
const newCategory: iCategory = {
  id: "",
  category_title: "",
  category_description: "",
  category_image: "",
  products: Array<iProduct>(),
};

export default newCategory;
