import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
});

instance.interceptors.request.use(
  (config) => {
    const temp = config;
    const accessToken = localStorage.getItem("access_token");
    if (temp && temp.headers && accessToken) {
      temp.headers.Authorization = `Bearer ${accessToken}`;
    }
    return temp;
  },
  (error) => Promise.reject(error)
);

export default instance;
