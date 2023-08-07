import axios from "axios";

export const postEmail = async (data) => {
  try {
    return await axios.post(`http://52.65.160.119:8080/findPassword`, data);
  } catch(err) {
    alert(`${err.response.status}: ${err.response.data}`);
  }
  console.log(data);
}