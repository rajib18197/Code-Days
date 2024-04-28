const combineReducers = function (obj, { state, action = {} } = {}) {
  const appState = {};
  console.log(state, obj);
  for (let [key, value] of Object.entries(obj)) {
    appState[key] = obj[key](state?.[key], action);
  }

  return { obj, appState };
};

const createStore = function (reducer, initialState) {
  const store = {
    state: reducer.appState,
    listeners: [],
    getState() {
      return this.state;
    },
  };

  store.dispatch = function (action) {
    // Action must be an plain JS object (TODO: implement later)
    const newState = combineReducers(reducer.obj, {
      state: this.state,
      action,
    });
    // console.log(newState);

    if (newState !== this.state) {
      store.state = newState;
      this.listeners.forEach((listener) => listener());
    }
  };

  store.subscribe = function (listener) {
    this.listeners.push(listener);
  };

  return store;
};

const rootReducer = combineReducers({
  cart: (state = [], action) => {
    if (action.type === "CART/ADD_NEW_ITEM") {
      return [...state, action.payload];
    }

    return state;
  },

  menus: (state = [], action) => {
    if (action.type === "MENUS/LOADED") {
      return [...state, action.payload];
    }

    return state;
  },
});

const store = createStore(rootReducer);

store.dispatch({
  type: "CART/ADD_NEW_ITEM",
  payload: { id: 1, name: "Pizza Avocado", price: 22 },
});

console.log(store.getState());
