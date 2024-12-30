import { useEffect, useState } from "react";
import { getTaskCategoriesService } from "../../services/taskCategory";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const handleGetTaskCategories = async () => {
    const data = await getTaskCategoriesService();
    setCategories(data);
  };
  useEffect(() => {
    handleGetTaskCategories();
  }, []);
  return (
    <div>
      {categories.map((cat: { id: string }) => (
        <div>{cat.id}</div>
      ))}
    </div>
  );
};

export default Categories;
