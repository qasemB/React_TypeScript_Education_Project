import { useEffect, useState } from "react";
import { getTaskCategoriesService } from "../../services/taskCategory";
import { CategoryListItemType } from "../../types/taskCategory";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryListItemType[]>([]);
  const handleGetTaskCategories = async () => {
    const data = await getTaskCategoriesService();
    setCategories(data);
  };
  useEffect(() => {
    handleGetTaskCategories();
  }, []);
  return (
    <div>
      <table className="table w-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-600 dark:shadow-gray-500">
        <thead>
          <tr className="border-b h-12 [&>th]:px-2 [&>th]:md:px-3 [&>th]:text-center">
            <th className=" hidden md:table-cell">#</th>
            <th>عنوان</th>
            <th>توضیحات</th>
            <th>تاریخ ایجاد</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="md:text-3 text-gray-800 dark:text-gray-400">
          {categories.map((item) => (
            <tr
              key={item.id}
              className="h-9 border-b border-dashed dark:border-grashadow-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center"
            >
              <td className=" hidden md:table-cell"> {item.id} </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.createdAt}</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
