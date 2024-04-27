import { Provider } from "react-redux";
import store from "../store";
import BlogsList from "./BlogsList";
import Test from "./Test";

export default function BlogsApp() {
  return (
    <Provider store={store}>
      {/* <BlogsList /> */}
      <Test />
    </Provider>
  );
}
