import instance from "../axios";

export const patchPassword = async (data) => {
  return await instance.patch(`/updatePassword`, data);
}