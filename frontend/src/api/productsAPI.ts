import { Product } from "../types";

const url = 'http://localhost:3000';

export const getAllProducts = async(): Promise<Product[]> => {
    const response = await fetch(url + '/products', {
        method: 'GET',
    });
    return await response.json();
}

export const createProduct = async(product: Partial<Product>): Promise<Product> => {
    const response = await fetch(url + '/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
    return await response.json();
}

export const deleteProduct = async(id: number): Promise<void> => {
    await fetch(url + '/remove/' +  id, {
        method: 'DELETE',
    })
}