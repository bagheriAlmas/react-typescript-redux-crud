// src/reducer.ts

import { ProductState, GetAllProductsAction, GetProductByIdAction, AddProductAction, UpdateProductAction, DeleteProductAction } from './actionTypes';

const initialState: ProductState = {
  products: [],
};

type ProductAction = GetAllProductsAction | GetProductByIdAction | AddProductAction | UpdateProductAction | DeleteProductAction;

const reducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'GET_PRODUCT_BY_ID':
      return {
        ...state,
        products: [action.payload],
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
