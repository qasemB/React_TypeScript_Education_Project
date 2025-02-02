import AppButton from "@/components/shared/AppButton";
import { getTaskWithDate } from "@/services/task";
import { TaskListType } from "@/types/task";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [todayTasks, setTodayTasks] = useState<TaskListType[]>([]);

  const handleGetTodayTasks = async () => {
    const today = new Date().toISOString().split("T")[0];
    console.log(today);

    const res = await getTaskWithDate(today);
    console.log(res);
    if (res.status === 200) {
      setTodayTasks(res.data);
    }
  };

  useEffect(() => {
    handleGetTodayTasks();
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-baseline">
      <div className="w-full max-w-96 h-full flex flex-col gap-10">
        {todayTasks?.length ? (
          <ul className="space-y-3 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            {todayTasks?.map((task) => (
              <li
                key={task.id}
                className="w-full rounded-sm border-gray-400 border py-2 px-3 hover:shadow-md cursor-pointer transition-all"
              >
                {task.title}
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-center w-full">امروز تسکی نداری... 😴</h1>
        )}
        <AppButton title="افزودن تسک" />
      </div>
    </div>
  );
};

export default Dashboard;
