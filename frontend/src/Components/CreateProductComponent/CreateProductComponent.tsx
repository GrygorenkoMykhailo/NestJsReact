import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/ProductsSlice'
import { AppDispatch } from '../../redux/store';

export const CreateProductComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);

    const handleCreateProduct = () => {
        if(titleRef.current?.value && descriptionRef.current?.value && priceRef.current?.value){
            dispatch(createProduct({
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                price: Number.parseInt(priceRef.current.value),
            }));
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mt-4">Create New Product</h2>
            <input
                type="text"
                ref={titleRef}
                placeholder="Title"
                className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full"
                name="title"
            />
            <input
                type="text"
                ref={descriptionRef}
                placeholder="Description"
                className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full"
                name="description"
            />
            <input
                type="number"
                ref={priceRef}
                placeholder="Price"
                className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full"
                name="price"
            />
            <button
                onClick={handleCreateProduct}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                Create
            </button>
        </div>
    );
};