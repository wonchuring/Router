import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(true);
        setError(null);
      })
      .catch((error) => {
        setData([]);
        setLoading(false);
        setError("오류발생");
      });
  }, [url]);

  return { data, loading, error };
};
