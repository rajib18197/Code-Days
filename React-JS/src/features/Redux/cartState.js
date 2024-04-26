function cartReducert(state = [{ name: "Cart #1" }], action) {
  return { cart: state };
}

const store = cartReducert();

export default store;
