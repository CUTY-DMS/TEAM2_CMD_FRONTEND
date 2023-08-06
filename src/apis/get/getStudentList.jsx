import axios from "axios";

const BASE_URL = "http://52.65.160.119:8080";

export const getStudentList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getStudentList`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Request was not successful:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
