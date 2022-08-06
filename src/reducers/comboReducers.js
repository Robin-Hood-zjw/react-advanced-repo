import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const comboReducer = combineReducers({
  productReducer: productReducer,
  selectedProductReducer: selectedProductReducer,
});

export default comboReducer;
