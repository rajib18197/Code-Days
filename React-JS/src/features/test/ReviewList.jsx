import { useEffect, useState } from "react";

async function wait(seconds) {
  return new Promise((res) => {
    setTimeout(() => res("success"), seconds * 1000);
  });
}

export default function ReviewList() {
  const [data, setData] = useState("");

  useEffect(function () {
    async function getData() {
      console.log("Review Data");
      await wait(2);
      setData("I waited for 2 seconds");
    }

    getData();
  }, []);

  return <div>{data ? data : "Waiting"}</div>;
}
