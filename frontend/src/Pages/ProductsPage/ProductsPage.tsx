import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchAllProducts } from '../../redux/ProductsSlice';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { ProductCard } from '../../Components/ProductCard';

export const ProductsPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const { products, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} isAdmin={false} />
                    ))}
                </div>
                <div className="mt-8">
                </div>
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">Error: {error}</p>}
            </div>
            <Footer />
        </div>
    );
};