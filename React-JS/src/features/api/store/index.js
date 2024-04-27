import { applyMiddleware, combineReducers, createStore } from "redux";
import blogsReducer from "./blogs/reducer";
import counterReducer from "./blogs/testReducer";
import thunk from "./blogs/thunk";

const rootReducer = combineReducers({
  blogs: blogsReducer,
  count: counterReducer,
});

const initialState = {
  blogs: {},
  count: { counter: 20, string: "study" },
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
