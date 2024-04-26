import { createContext } from "react";
import store from "./cartState";

const StoreContext = createContext();

export default function Provider({ children }) {
  return (
    <StoreContext.Provider value={{ ...store }}>
      {children}
    </StoreContext.Provider>
  );
}

export function connect(mapStateToProps) {
  return function (Component) {
    return function () {
      return (
        <StoreContext.Consumer>
          {(state) => {
            console.log(state);
            const props = mapStateToProps(state);
            return <Component {...props} />;
          }}
        </StoreContext.Consumer>
      );
    };
  };
}
