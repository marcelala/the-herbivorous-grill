
// Project files
import iCategory from "../types/iCategory";

// Interface
interface iProps {
    item: iCategory;
    onDelete: Function;
    onUpdate: Function;
}

export default function CategoryItem({ item, onDelete, onUpdate }: iProps) {
    const { categoryId, categoryTitle, categoryDescription } = item;

    // Methods
    function onUpdateButton() {
        const editedCategory = {
            categoryId: categoryId,
            categoryTitle: categoryTitle,
            categoryDescription: categoryDescription,
        };
        onUpdate(categoryId, editedCategory);
    }
    return (
        <li>
            <button onClick={() => onDelete(categoryId)}>Delete it</button>
            <button onClick={() => onUpdateButton()}>Update it</button>
            <b>{categoryTitle}:</b>
            {categoryDescription}
        </li>
    );
}