class Redux {
  static combineReducers(obj, { state, action = {} } = {}) {
    const appState = {};

    for (let [key, value] of Object.entries(obj)) {
      appState[key] = obj[key](state?.[key], action);
    }

    return { obj, appState };
  }

  static createStore(reducer, initialState) {
    const store = {
      state: reducer.appState,
      listeners: [],
      getState() {
        return this.state;
      },
    };

    store.dispatch = function (action) {
      // Action must be an plain JS object (TODO: implement later)

      const newState = Redux.combineReducers(reducer.obj, {
        state: this.state,
        action,
      });

      if (newState !== this.state) {
        this.state = newState.appState;
        this.listeners.forEach((listener) => listener());
      }
    };

    store.subscribe = function (listener) {
      this.listeners.push(listener);
    };

    return store;
  }
}

const rootReducer = Redux.combineReducers({
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

const store = Redux.createStore(rootReducer);

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
