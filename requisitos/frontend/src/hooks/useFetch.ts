import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  //   console.log(isLoading, data, url);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading };
};
