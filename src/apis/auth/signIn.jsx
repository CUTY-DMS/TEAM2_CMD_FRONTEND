import { baseUrl } from "../baseUrl";
import axios from "axios";

export const signIn = (data) => {
  try {
    const res = axios.post(`${baseUrl}/login/admin`, data);
    return res;
  } catch(err) { alert(err); }
}