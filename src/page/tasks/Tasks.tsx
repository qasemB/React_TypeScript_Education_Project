import { getTaskCategoriesWithTasksService } from "@/services/taskCategory";
import { CategoryWhithTasksListItemType } from "@/types/taskCategory";
import { convertMiladi2Jalali, getDatesInRange } from "@/utils/dateUtils";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [dates, setDates] = useState<{ gregorian: string; jalali: string }[]>([]);
  const [taskCats, setTaskCats] = useState<CategoryWhithTasksListItemType[]>([]);

  const generateDatesInRange = () => {
    const resDates = getDatesInRange(3, 5);
    const resJalaliDates = resDates.map((date) => ({
      gregorian: date,
      jalali: convertMiladi2Jalali(date),
    }));
    setDates(resJalaliDates);
  };

  const handleGetTasks = async () => {
    const res = await getTaskCategoriesWithTasksService();
    if (res.status === 200) {
      setTaskCats(res.data);
    }
  };

  useEffect(() => {
    generateDatesInRange();
  }, []);

  useEffect(() => {
    if (dates.length) handleGetTasks();
  }, [dates]);

  return (
    <div>
      <h1 className="py-5 text-lg font-bold">لیست تسک ها</h1>
      <table className="table w-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-600 dark:shadow-gray-500">
        <thead>
          <tr className="border-b dark:border-b-gray-500 h-12 [&>th]:px-2 [&>th]:md:px-3 [&>th]:text-center">
            <th>تاریخ</th>
            {taskCats.map((tc) => (
              <th key={tc.id}>{tc.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="md:text-3 text-gray-800 dark:text-gray-400">
          {dates.map((date) => (
            <tr
              key={date.gregorian}
              className="h-9 border-b border-dashed dark:border-b-gray-500 shadow-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center last:border-b-0"
            >
              <td> {date.jalali} </td>
              {taskCats.map((tc) => (
                <td key={tc.id} className="text-center">{"..."}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
