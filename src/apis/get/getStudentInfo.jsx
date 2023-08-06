import axios from "axios";

export const getStudentInfo = async () => {
  const baseUrl = "http://52.65.160.119:8080";
  const apiPath = "/student";

  try {
    const response = await axios.get(`${baseUrl}${apiPath}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        "Request was not successful. Status code:",
        response.status
      );
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
