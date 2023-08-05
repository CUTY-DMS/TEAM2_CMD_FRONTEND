import axios from "axios";
import { baseUrl } from "./baseUrl";

export const refresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const response = await axios.post(`${baseUrl}/reissue`, {
    headers: { Authorization: `Bearer ${refreshToken}` }
  })
  if (accessToken === response.data.accessToken) return;
  else {
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    window.location.reload();
  }
}