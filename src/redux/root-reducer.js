import { combineReducers } from "redux";
// Import reducers
import { productReducer, selectedProductReducer } from "./reducers/productReducer";

export default combineReducers({
    products: productReducer,
    selectedProduct: selectedProductReducer
});
