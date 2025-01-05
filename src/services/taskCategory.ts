import httpService from "./_httpService";

export const getTaskCategoriesService = async () => {
  const respons = await httpService("/taskCategories", "GET")
  if (respons.status == 200) return respons.data;
  return null;
};
