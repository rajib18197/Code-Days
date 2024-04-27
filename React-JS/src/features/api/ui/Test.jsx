import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  console.log("re");
  const dispatch = useDispatch();
  const { counter, string } = useSelector((state) => state.count);
  console.log(counter, string, 20);

  function handleClick() {
    dispatch({ type: "count" });
  }

  return (
    <div>
      <button onClick={handleClick}>First Action {counter}</button>
      <h2>{string}</h2>
    </div>
  );
}
