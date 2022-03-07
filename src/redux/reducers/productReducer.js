import { ActionTypes } from "../actionTypes/ActionTypes";

const { SET_PRODUCTS } = ActionTypes;
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
