import { baseUrl } from "../baseUrl";
import axios from "axios";

export const signUp = (data) => {
  try {
    const res = axios.post(`${baseUrl}/signup/admin`, data);
    return res;
  } catch(err) { alert(err) }
}