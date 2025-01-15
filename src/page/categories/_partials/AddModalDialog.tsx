import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addTaskCategoryService } from "@/services/taskCategory";
import { AddCategoryType, CategoryListItemType } from "@/types/taskCategory";
import { FormEvent, useState } from "react";

const AddModalDialog = ({
  setCategories,
}: {
  setCategories: (data: CategoryListItemType) => void;
}) => {
  const [values, setValues] = useState<AddCategoryType>({
    title: "",
    description: "",
    createdAt: new Date().toISOString(),
    userId: "1",
    icon: "test_icon",
  });

  const handleAddTaskCategory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await addTaskCategoryService(values);
    if (res) {
      setCategories(res.data);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="text-white bg-sky-500 rounded-lg px-3 py-1">
        افزودن
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
          <DialogDescription className="py-5">
            <form className="max-w-sm mx-auto" onSubmit={handleAddTaskCategory}>
              <AppInput
                id="title"
                title="عنوان"
                placeholder="فقط حروف فارسی"
                required
                value={values.title}
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
              />
              <AppInput
                id="description"
                title="توضیحات"
                placeholder="فقط حروف فارسی"
                required
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
              <AppButton type="submit"/>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddModalDialog;
