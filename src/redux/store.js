import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  fetchProductsReducer,
  fetchSingleProductReducer,
} from "./reducers/productReducer";

const finalReducer = combineReducers({
  products: fetchProductsReducer,
  singleProduct: fetchSingleProductReducer,
});

// const currentUser = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser"))
//   : [];

// const cartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// const initialState = {
//   loginReducer: {
//     currentUser: currentUser,
//   },
//   CartReducer: {
//     cartItems: cartItems,
//   },
// };

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;