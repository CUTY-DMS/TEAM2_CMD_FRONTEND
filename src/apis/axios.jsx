import { refresh } from "./refresh";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.65.160.119:8080",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  }
})

instance.interceptors.response.use(
  function (res) { return res; },
  function (err) { refresh().catch(err => console.log(err)); }
)

export default instance;