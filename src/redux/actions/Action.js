import { ActionTypes } from "../actionTypes/ActionTypes";
import fakestoreapi from "../../utils/Axios";

const {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  FETCH_PRODUCTS,
} = ActionTypes;

export const fetchProducts = () => async (dispatch) => {
  const response = await fakestoreapi.get("/products");
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakestoreapi.get(`/products/${id}`);
  dispatch({ type: SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
