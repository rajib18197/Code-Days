export default function (state = { counter: 0, string: "" }, action) {
  console.log(action, 97);
  if (action.type === "count") {
    return { ...state, counter: state.counter + 1 };
  }

  if (action.type === "counter") {
    return { ...state, string: "counter" };
  }

  return state;
}
