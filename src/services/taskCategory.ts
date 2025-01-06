import httpService from "./_httpService";

export const getTaskCategoriesService = async () => {
  const respons = await httpService("/taskCategories", "GET")
  if (respons.status == 200) return respons.data;
  return null;
};
export const addTaskCategoryService = () => {
  return httpService("/taskCategories", "POST", {
    title: "دسته تست 2",
    description: "توضیحات تست 2",
    icon: "work_icon",
    userId: "1",
    createdAt: "2024-01-01T00:00:00.000Z"
  })
};
