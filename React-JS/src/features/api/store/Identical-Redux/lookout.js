class Redux {
  combineReducers(obj, { state, action = {} } = {}) {
    const appState = {};

    for (let [key, value] of Object.entries(obj)) {
      appState[key] = obj[key](state?.[key], action);
    }

    return { obj, appState };
  }

  createStore(reducer, initialState) {
    const self = redux;

    const store = {
      state: reducer.appState,
      listeners: [],
      getState() {
        return this.state;
      },
    };

    store.dispatch = function (action) {
      if (typeof action !== "object")
        throw new Error("Action must be an Object!!");

      const newState = self.combineReducers(reducer.obj, {
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

export const redux = new Redux();

export const { createStore, combineReducers } = redux;
