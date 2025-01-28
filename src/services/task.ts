import { AddTaskListType } from "@/types/task";
import httpService from "./_httpService";

export const editTaskService = (
  taskId: string,
  values: Partial<AddTaskListType>
) => {
  return httpService(`/tasks/${taskId}`, "PATCH", values);
};
