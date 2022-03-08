import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

export const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectProductReducer,
});
