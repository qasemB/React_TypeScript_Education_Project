import { GoHome } from "react-icons/go";
import { useAppSelector } from "../../redux/reduxHooks";
import SidebarItem from "./SidebarItem";
import TopActionElements from "./TopActionElements";
import { TbSubtask } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
const Sidebar = () => {
  const { showSidebar } = useAppSelector((state) => state.uiManagerReducer);
  return (
    <section
      id="sidebar"
      className={`p-3 fixed lg:right-0 top-0 w-app_sidebar_w h-screen bg-white dark:bg-gray-700  md:block transition-all border-l border-gray-500 ${
        showSidebar ? "right-0" : "-right-app_sidebar_w"
      }`}
    >
      <div className="h-full w-full">
        <TopActionElements />
        <hr className="my-5 border-b dark:border-gray-500" />
        <ul className="space-y-4">
          <SidebarItem title="داشبورد" Icon={GoHome}/>
          <SidebarItem title="دسته بندی ها" Icon={TbSubtask}/>
          <SidebarItem title="تسک ها" Icon={FaTasks}/>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
