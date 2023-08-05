import { baseUrl } from "../baseUrl";
import axios from "axios";

export const signIn = async (data) => {
  try {
    return await axios.post(`${baseUrl}/login/admin`, data);
  } catch(err) { 
    alert(err); 
  }
}