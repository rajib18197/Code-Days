import { User } from "./models/User";

export const init = function () {
  const user = new User({ name: "raju", age: 25 });
  user.set({ name: "Peter" });
  console.log(user.get("name"));
};
