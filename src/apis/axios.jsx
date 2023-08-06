import { refresh } from "./refresh";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.65.160.119:8080",
  timeout: 1000
})

instance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${token}`;
  }
)

instance.interceptors.response.use(
  function (res) { return res; },
  function (err) { refresh().catch(err => alert(err)) }
)

export default instance;