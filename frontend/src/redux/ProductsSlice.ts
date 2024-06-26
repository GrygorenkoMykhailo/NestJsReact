import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, createProduct as apiCreateProduct, deleteProduct as apiDeleteProduct } from '../api/productsAPI';
import { Product } from "../types";

export const fetchAllProducts: AsyncThunk<Product[], void, object> = createAsyncThunk(
    'products/fetchAll',
    async () => {
        const response = await getAllProducts();
        return response; 
    }
);

export const createProduct: AsyncThunk<Product, Partial<Product>, object> = createAsyncThunk(
    'products/create',
    async (product: Partial<Product>) => {
        const response = await apiCreateProduct(product);
        return response; 
    }
);

export const deleteProduct: AsyncThunk<number, number, object> = createAsyncThunk(
    'products/delete',
    async (id: number) => {
        await apiDeleteProduct(id);
        return id; 
    }
);

export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload; 
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch products';
            })
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload); 
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to create product';
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(product => product.id !== action.payload); 
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to delete product';
            });
    },
});

export const { reducer } = productsSlice
export default productsSlice.reducer;
