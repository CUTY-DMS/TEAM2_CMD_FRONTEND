import instance from "../axios";

export const getAdminInfo = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    return await instance.get(`/admin`, { headers: { Authorization: `Bearer ${accessToken}` } });
  } catch(err) { alert(err) }
}