let flag = true;

const thunk = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      console.log(typeof action, action, getState(), 12);

      if (typeof action === "function") {
        return action(dispatch, getState);
      }

      if (flag) {
        flag = false;
        dispatch({ type: "counter" });
      }

      console.log(getState(), action, 67);

      return next(action);
    };
  };
};

export default thunk;
