import { Product } from "../../types"
import { deleteProduct } from '../../redux/ProductsSlice'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

export const ProductCard = (props: { product: Product, isAdmin: boolean }) => {
    const dispatch: AppDispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(props.product.id)); 
    };

    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold">{props.product.title}</h2>
            <p className="text-gray-500">{props.product.description}</p>
            <p className="text-gray-700 mt-2">${props.product.price}</p>
            {props.isAdmin && 
                <button onClick={handleDelete} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Delete
                </button>
            }
        </div>
    );
}