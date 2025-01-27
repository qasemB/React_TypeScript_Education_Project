import { AddCategoryType } from "@/types/taskCategory";
import httpService from "./_httpService";

export const getTaskCategoriesService = async () => {
  const respons = await httpService("/taskCategories", "GET");
  if (respons.status == 200) return respons.data;
  return null;
};
export const getTaskCategoriesWithTasksService = () => {
  return httpService("/taskCategories?_embed=tasks", "GET");
};

export const addTaskCategoryService = (values: AddCategoryType) => {
  return httpService("/taskCategories", "POST", values);
};
export const deleteTaskCategoryService = (catId: string) => {
  return httpService(`/taskCategories/${catId}`, "DELETE");
};
export const updateTaskCategoryService = (catId: string, values: AddCategoryType) => {
  return httpService(`/taskCategories/${catId}`, "PUT", values);
};
