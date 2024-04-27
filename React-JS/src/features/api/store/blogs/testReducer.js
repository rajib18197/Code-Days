export default function (state = { counter: 11, string: "h" }, action) {
  console.log(action, 97, state);
  if (action.type === "count") {
    return { ...state, counter: state.counter + 1 };
  }

  if (action.type === "counter") {
    return { ...state, string: "counter" };
  }

  return state;
}
