// src/types.ts

export interface Product {
    id: number;
    productName: string;
    price: number;
  }
  
  export interface ProductState {
    products: Product[];
  }
  
  export interface GetAllProductsAction {
    type: 'GET_ALL_PRODUCTS';
    payload: Product[];
  }
  
  export interface GetProductByIdAction {
    type: 'GET_PRODUCT_BY_ID';
    payload: Product;
  }
  
  export interface AddProductAction {
    type: 'ADD_PRODUCT';
    payload: Product;
  }
  
  export interface UpdateProductAction {
    type: 'UPDATE_PRODUCT';
    payload: Product;
  }
  
  export interface DeleteProductAction {
    type: 'DELETE_PRODUCT';
    payload: number; // ID of the product to be deleted
  }
  