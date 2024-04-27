import { useEffect, useState } from "react";

export function useQuery({ queryFn }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function loadData() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await queryFn();
        setData(response);
      } catch (err) {
        setError({ message: err.message || "Error Occured!!!" });
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return { isLoading, data, error };
}

const cache = new Map();

export function useQueryDispatch({ actionCreator, dispatch, id }) {
  useEffect(function () {
    // if (!cache.has(id)) {
    dispatch(actionCreator());
    //   cache.set(id, "DONE");
    // }
  }, []);
}
