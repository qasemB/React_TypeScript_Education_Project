import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import AppSelect from "@/components/shared/AppSelect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addTaskService } from "@/services/task";
import { getTaskCategoriesService } from "@/services/taskCategory";
import { CategoryListItemType } from "@/types/taskCategory";
import { errorToast, successToast } from "@/utils/toastUtils";
import { FormEvent, useEffect, useState } from "react";

type AddTaskModalType = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  handleRefresh: () => void;
};

const AddTaskModal = ({ open, setOpen, handleRefresh }: AddTaskModalType) => {
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryListItemType[]>([]);

  const handleGetTaskCategories = async () => {
    const data = await getTaskCategoriesService();
    if (data) setCategories(data);
  };

  const handleAddTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedCategory || !title.trim()) return errorToast("فیلد ها رو پر کنید");
    setIsLoading(true);
    const today = new Date().toISOString();
    const res = await addTaskService({
      createdAt: today,
      startedAt: today,
      isDone: false,
      taskCategoryId: selectedCategory,
      title,
    });
    setIsLoading(false);
    if (res.status === 201) {
      successToast();
      handleRefresh();
      setTitle("");
      setOpen(false)
    }
  };

  useEffect(() => {
    handleGetTaskCategories();
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> افزودن تسک جدید</DialogTitle>
          <DialogDescription></DialogDescription>
            <form
              className="max-w-sm mx-auto space-y-5 py-5 w-full"
              onSubmit={handleAddTask}
            >
              <AppSelect
                title="دسته بندی"
                onChange={(id: string) => setSelectedCategory(id)}
                options={categories.map((category) => ({
                  title: category.title,
                  value: category.id,
                }))}
              />
              <AppInput
                id="title"
                title="عنوان"
                placeholder="فقط حروف فارسی"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <AppButton type="submit" isLoading={isLoading} />
            </form>
          
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;
