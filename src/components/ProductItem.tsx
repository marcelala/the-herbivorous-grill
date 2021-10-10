
// Project files
import iProduct from "../types/iProduct";

// Interface
interface iProps {
    item: iProduct;
    onDelete: Function;
    onUpdate: Function;
}

export default function ProductItem({ item, onDelete, onUpdate }: iProps) {
    const { productId, productTitle, productDescription, productPrice } = item;

    // Methods
    function onUpdateButton() {
        const editedProduct = {
            productId: productId,
            productTitle: productTitle,
            productDescription: productDescription,
            productPrice: productPrice
        };
        onUpdate(productId, editedProduct);
    }
    return (
        <li>
            <button onClick={() => onDelete(productId)}>Delete me</button>
            <button onClick={() => onUpdateButton()}>Update me</button>
            <b>{productTitle}:</b>
            {productDescription}
        </li>
    );
}