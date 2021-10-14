import { useCallback, useEffect, useState } from "react";

// Project files
import iCategory from "../types/iCategory";
import Button from "./Button";
import { getDownloadURL, ref } from "firebase/storage";
import { imagesBucketRef } from "../scripts/cloudStorage";

// Interface
interface iProps {
  item: iCategory;
}

export default function CategoryItem({ item }: iProps) {
  const { id, category_title, category_description, category_image } = item;
  const [categoryImageUrl, setImageUrl] = useState("");

  const getImage = useCallback(async (category_image) => {
    try {
      const imageRef = ref(imagesBucketRef, category_image);
      const imageUrl = await getDownloadURL(imageRef);
      setImageUrl(await imageUrl);
    } catch {
      console.log(categoryImageUrl);
    }
  }, []);

  // @ts-ignore
  useEffect(() => getImage(category_image), [getImage]);

  //console.log(category_image);

  function onUpdateButton() {
    const editedCategory = {
      category_title: category_title,
      category_description: category_description,
      category_image: category_image,
    };
    //onUpdate(id, editedCategory);
  }
  return (
    <li className="category-item">
      {/*<button onClick={() => onDelete(id)}>Delete it</button>
      <button onClick={() => onUpdateButton()}>Update it</button>*/}
      <img src={categoryImageUrl} alt="delicious foods and beautiful drinks" />
      <div className="text-box">
        <h1>{category_title}</h1>
        <p>{category_description}</p>
      </div>
      <Button theme={"secondary"} onClick={() => console.log(category_title)}>
        View {category_title}
      </Button>
    </li>
  );
}
