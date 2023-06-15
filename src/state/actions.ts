// src/actions.ts

import { Product, GetAllProductsAction, GetProductByIdAction, AddProductAction, UpdateProductAction, DeleteProductAction } from './actionTypes';

export const getAllProducts = (): GetAllProductsAction => {
  // Simulated API call to fetch products
  const products: Product[] = [
    { id: 1, productName: 'Product 1', price: 10 },
    { id: 2, productName: 'Product 2', price: 20 },
    { id: 3, productName: 'Product 3', price: 30 },
  ];

  return {
    type: 'GET_ALL_PRODUCTS',
    payload: products,
  };
};

export const getProductById = (id: number): GetProductByIdAction => {
  // Simulated API call to fetch product by ID
  const product: Product = { id, productName: 'Product', price: 0 };

  return {
    type: 'GET_PRODUCT_BY_ID',
    payload: product,
  };
};

export const addProduct = (product: Product): AddProductAction => {
  // Simulated API call to add a new product
  // Assuming the server generates a unique ID for the product
  const newProduct: Product = { ...product, id: Math.floor(Math.random() * 100) };

  return {
    type: 'ADD_PRODUCT',
    payload: newProduct,
  };
};

export const updateProduct = (product: Product): UpdateProductAction => {
  // Simulated API call to update an existing product
  const updatedProduct: Product = { ...product };

  return {
    type: 'UPDATE_PRODUCT',
    payload: updatedProduct,
  };
};

export const deleteProduct = (id: number): DeleteProductAction => {
  // Simulated API call to delete a product
  return {
    type: 'DELETE_PRODUCT',
    payload: id,
  };
};
