import { applyMiddleware, createStore } from "redux";
import blogsReducer from "./blogs/reducer";
import thunk from "./blogs/thunk";

const store = createStore(blogsReducer, applyMiddleware(thunk));

export default store;
