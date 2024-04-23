import { useEffect, useState } from "react";
import ProductList from "./features/test/ProductList";
import ReviewList from "./features/test/ReviewList";

async function wait(seconds) {
  return new Promise((res) => {
    setTimeout(() => res("success"), seconds * 1000);
  });
}

export default function App() {
  const [data, setData] = useState("");

  useEffect(function () {
    async function getData() {
      console.log("Product Data");
      await wait(5);
      setData("I waited for 5 seconds");
    }

    getData();
  }, []);

  return (
    <div>
      {data || null}
      <ProductList data={data}>
        <ReviewList />
      </ProductList>
    </div>
  );
}
