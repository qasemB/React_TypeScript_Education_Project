export interface AddTaskListType {
  title: string;
  description?: string;
  isDone: boolean;
  taskCategoryId: string;
  repetitionType?: number;
  repetitionItems?: number;
  includeVacation?: boolean;
  startedAt: string;
  endedAt?: string;
  createdAt: string;
}
export interface TaskListType extends AddTaskListType {
  id: string;
}