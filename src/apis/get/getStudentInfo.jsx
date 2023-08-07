import instance from "../axios";

export const getStudentInfo = async (id) => {
  return await instance.get(`/student/${id}`);
};
