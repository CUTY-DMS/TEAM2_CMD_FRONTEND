import axios from "axios";

export const signIn = async (data) => {
  try { return await axios.post(`http://52.65.160.119:8080/login/admin`, data); }
  catch(err) { alert(err); }
}