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
import { AddCategoryType } from "@/types/taskCategory";
import { FormEvent, useState } from "react";

const initialValues = {
  title: "",
  description: "",
  createdAt: new Date().toISOString(),
  userId: "1",
  icon: "test_icon",
};

type AddTaskModalType = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

const AddTaskModal = ({ open, setOpen }: AddTaskModalType) => {
  const [values, setValues] = useState<AddCategoryType>(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> افزودن تسک جدید</DialogTitle>
          <DialogDescription className="py-5">
            <form className="max-w-sm mx-auto space-y-5" onSubmit={handleAddTask}>
              <AppSelect title="دسته بندی"/>
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
              <AppButton type="submit" isLoading={isLoading} />
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;
