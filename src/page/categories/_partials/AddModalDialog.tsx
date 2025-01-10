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
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  عنوان
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="فقط حروف فارسی"
                  required
                  value={values.title}
                  onChange={(e) =>
                    setValues({ ...values, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  توضیحات
                </label>
                <input
                  type="text"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={values.description}
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full"
              >
                ثبت
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddModalDialog;
