function cartReducert(state, action) {
  return state;
}

const store = createStore(cartReducert);

const StoreContext = createContext();

function Provider({ children }) {
  return (
    <StoreContext.Provider value={{ store: store }}>
      {children}
    </StoreContext.Provider>
  );
}

function connect(mapStateToProps) {
  return function (Component) {
    return function () {
      return (
        <StoreContext.Consumer>
          {({ state }) => {
            const props = mapStateToProps(state);
            return <Component {...props} />;
          }}
        </StoreContext.Consumer>
      );
    };
  };
}

connect(mapStateToProps)(Cart);
