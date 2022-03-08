import { ActionTypes } from "../actionTypes/ActionTypes";

const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ActionTypes;
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

export const removeSelectedProduct = (product) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
