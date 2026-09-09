import axios from "axios";
//https://jsonplaceholder.typicode.com
const api = axios.create({
  baseURL: "https://api.tvmaze.com",
  //   baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

// req

api.interceptors.request.use(
  (config) => {
    console.log("API req :::", config);
    //   return config;
    const token = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

api.interceptors.response.use(
  (resp) => {
    console.log("API resp:", resp);

    return resp.data;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default api;

// res
