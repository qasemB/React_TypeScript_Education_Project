import { useEffect, useState } from "react";
import {
  deleteTaskCategoryService,
  getTaskCategoriesService,
} from "../../services/taskCategory";
import { CategoryListItemType } from "../../types/taskCategory";
import { convertMiladi2Jalali } from "../../utils/dateUtils";
import { BsTrash, BsPencil } from "react-icons/bs";
import AddModalDialog from "./_partials/AddModalDialog";
import { confirmAlert } from "@/utils/alertUtils";
import { successToast } from "@/utils/toastUtils";

const Categories = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CategoryListItemType>();
  const [categories, setCategories] = useState<CategoryListItemType[]>([]);
  const handleGetTaskCategories = async () => {
    const data = await getTaskCategoriesService();
    if (data) setCategories(data);
  };

  useEffect(() => {
    handleGetTaskCategories();
  }, []);

  const handleChangeCategoriesList = (data: CategoryListItemType) =>
    setCategories([...categories, data]);

  const handleDeleteCategory = async (item: CategoryListItemType) => {
    const confirm = await confirmAlert("آیا مطمئن هستید؟");
    if (confirm.isConfirmed) {
      const res = await deleteTaskCategoryService(item.id);
      if (res.status === 200) {
        const newCategories = categories.filter(
          (category) => category.id !== item.id
        );
        setCategories(newCategories);
        successToast("رکورد با موفقیت حذف شد");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="py-5 text-lg font-bold">لیست دسته بندی وظایف</h1>
        <AddModalDialog
          setCategories={handleChangeCategoriesList}
          open={open}
          setOpen={setOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <table className="table w-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-600 dark:shadow-gray-500">
        <thead>
          <tr className="border-b dark:border-b-gray-500 h-12 [&>th]:px-2 [&>th]:md:px-3 [&>th]:text-center">
            <th className=" hidden md:table-cell">#</th>
            <th>عنوان</th>
            <th className="hidden md:table-cell">توضیحات</th>
            <th>تاریخ ایجاد</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="md:text-3 text-gray-800 dark:text-gray-400">
          {categories.map((item) => (
            <tr
              key={item.id}
              className="h-9 border-b border-dashed dark:border-b-gray-500 shadow-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center last:border-b-0"
            >
              <td className=" hidden md:table-cell"> {item.id} </td>
              <td>{item.title}</td>
              <td className="hidden md:table-cell">{item.description}</td>
              <td>{convertMiladi2Jalali(item.createdAt)}</td>
              <td>
                <span className="h-full flex justify-center items-center w-full gap-2">
                  <BsTrash
                    className="text-red-400 cursor-pointer"
                    onClick={() => handleDeleteCategory(item)}
                  />
                  <BsPencil
                    className="text-gray-600 dark:text-gray-300 cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                      setSelectedItem(item);
                    }}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
