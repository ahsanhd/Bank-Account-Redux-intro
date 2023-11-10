import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const root = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));

export default store;
