import api from "./api.service";

export const list = async (params: any) => {
  const response = await api.get("comics", {params});
  return response;
};
