import { TaskListType } from "./task";

export interface AddCategoryType {
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  icon: string;
};
export interface  CategoryListItemType extends AddCategoryType {
  id: string;
};
export interface  CategoryWhithTasksListItemType extends CategoryListItemType {
  tasks: TaskListType[]
};