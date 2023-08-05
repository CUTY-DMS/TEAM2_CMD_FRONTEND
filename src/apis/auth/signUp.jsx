import { baseUrl } from "../baseUrl";
import axios from "axios";

export const signUp = async (data) => {
  try {
    return await axios.post(`${baseUrl}/signup/admin`, data);
  } catch(err) {
    alert(err);
  }
}