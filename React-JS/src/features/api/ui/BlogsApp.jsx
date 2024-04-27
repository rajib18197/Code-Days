import { Provider } from "react-redux";
import store from "../store";
import BlogsList from "./BlogsList";

export default function BlogsApp() {
  return (
    <Provider store={store}>
      <BlogsList />
    </Provider>
  );
}
