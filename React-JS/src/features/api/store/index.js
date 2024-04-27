import { applyMiddleware, combineReducers, createStore } from "redux";
import blogsReducer from "./blogs/reducer";
import counterReducer from "./blogs/testReducer";
import thunk from "./blogs/thunk";

const rootReducer = combineReducers({
  blogs: blogsReducer,
  count: counterReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
