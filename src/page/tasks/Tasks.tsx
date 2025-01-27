import { convertMiladi2Jalali, getDatesInRange } from "@/utils/dateUtils";
import { useEffect, useState } from "react";

const Tasks = () => {
    
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const resDates = getDatesInRange(3, 5);
    const resJalaliDates = resDates.map((date) => convertMiladi2Jalali(date));
    setDates(resJalaliDates);
  }, []);

  return (
    <div>
      <h1 className="py-5 text-lg font-bold">لیست تسک ها</h1>
      <table className="table w-full rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-600 dark:shadow-gray-500">
        <thead>
          <tr className="border-b dark:border-b-gray-500 h-12 [&>th]:px-2 [&>th]:md:px-3 [&>th]:text-center">
            <th>تاریخ</th>
            <th>دسته1</th>
            <th>دسته 2</th>
          </tr>
        </thead>
        <tbody className="md:text-3 text-gray-800 dark:text-gray-400">
          {dates.map((date) => (
            <tr
              key={date}
              className="h-9 border-b border-dashed dark:border-b-gray-500 shadow-gray-500 [&>td]:px-2 [&>td]:md:px-3 [&>td]:text-center last:border-b-0"
            >
              <td> {date} </td>
              <td>تسک تست</td>
              <td>تسک تست</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
