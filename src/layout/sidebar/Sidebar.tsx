import { IoCloseOutline, IoSunnyOutline, IoMoon } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import {
  setShowSidebar,
  toggleTheme,
} from "../../redux/ui-management/uiManagement";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { showSidebar, theme } = useAppSelector(
    (state) => state.uiManagerReducer
  );
  return (
    <section
      id="sidebar"
      className={`p-3 fixed lg:right-0 top-0 w-app_sidebar_w h-screen bg-white dark:bg-gray-700  md:block transition-all border-l border-gray-500 ${
        showSidebar ? "right-0" : "-right-app_sidebar_w"
      }`}
    >
      <div className="h-full w-full">
        <div className="flex justify-between items-center">
          <button
            className="block"
            onClick={() => dispatch(setShowSidebar(false))}
          >
            <IoCloseOutline size={24} />
          </button>
          <button className={`block transform transition-all ${theme === "dark" && "rotate-45"}`} onClick={() => dispatch(toggleTheme())} >
            {theme === "dark" ? <IoSunnyOutline size={24}/> : <IoMoon size={24}/>}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
