import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAPI(url);
  }, [url]);

  const fetchAPI = async (url) => {
    try {
      const data = await api.get(url);
      console.log("API data:", data);

      setData(data.products);
    } catch (error) {
      setError(error.name);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
}
export default useFetch;
