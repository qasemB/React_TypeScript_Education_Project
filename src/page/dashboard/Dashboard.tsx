import AppButton from "@/components/shared/AppButton";
import { getTaskWithDate } from "@/services/task";
import { TaskListType } from "@/types/task";
import { useEffect, useState } from "react";
import AddTaskModal from "./_partials/AddTaskModal";

const Dashboard = () => {
  const [todayTasks, setTodayTasks] = useState<TaskListType[]>([]);
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleGetTodayTasks = async () => {
    const today = new Date().toISOString().split("T")[0];
    const res = await getTaskWithDate(today);
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
                className="w-full rounded-sm border-gray-400 border py-2 px-3 hover:shadow-md cursor-pointer transition-all flex justify-between items-center"
              >
                <span>{task.title}</span>
                <span>{task.taskCategory.title}</span>                
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-center w-full">امروز تسکی نداری... 😴</h1>
        )}
        <AppButton title="افزودن تسک" onClick={() => setOpenAddModal(true)} />
        <AddTaskModal open={openAddModal} setOpen={setOpenAddModal} handleRefresh = {handleGetTodayTasks}/>
      </div>
    </div>
  );
};

export default Dashboard;
