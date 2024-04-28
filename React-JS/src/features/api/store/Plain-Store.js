import { createStore, combineReducers } from "./Identical-Redux/lookout.js";

const rootReducer = combineReducers({
  cart: (state = [], action) => {
    if (action.type === "CART/ADD_NEW_ITEM") {
      return [...state, action.payload];
    }

    return state;
  },

  menus: (state = [], action) => {
    if (action.type === "MENUS/LOADED") {
      return [...action.payload];
    }

    return state;
  },
});

const store = createStore(rootReducer);

store.dispatch({
  type: "CART/ADD_NEW_ITEM",
  payload: { id: 1, name: "Pizza Avocado", unitPrice: 22, quantity: 2 },
});

store.dispatch({
  type: "CART/ADD_NEW_ITEM",
  payload: { id: 2, name: "Vege Brocolli", unitPrice: 12, quantity: 1 },
});

store.dispatch({
  type: "MENUS/LOADED",
  payload: [
    { id: 1, name: "Pizza Avocado", unitPrice: 22 },
    { id: 2, name: "Vege Brocolli", unitPrice: 12 },
    { id: 3, name: "Spinnach Caserolle", unitPrice: 12 },
    { id: 4, name: "Italian Pizzaria", unitPrice: 12 },
  ],
});

console.log(store.getState());
