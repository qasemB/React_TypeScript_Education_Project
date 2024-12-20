import { GoHome } from "react-icons/go";
import SidebarItem from "./SidebarItem";
import TopActionElements from "./TopActionElements";
import { TbSubtask } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import SidebarContainer from "../../components/containers/SidebarContainer";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="h-full w-full">
        <TopActionElements />
        <hr className="my-6 border-b dark:border-gray-500" />
        <ul className="space-y-4">
          <SidebarItem to={"/"} title="داشبورد" Icon={GoHome}/>
          <SidebarItem to={"/categories"} title="دسته بندی ها" Icon={TbSubtask}/>
          <SidebarItem to={"/tasks"} title="تسک ها" Icon={FaTasks}/>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
