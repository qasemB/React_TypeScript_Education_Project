import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { setShowSidebar, toggleTheme } from "../../redux/ui-management/uiManagement";

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const {showSidebar} = useAppSelector(state=>state.uiManagerReducer)
  return (
    <section
      id="sidebar"
      className={`fixed lg:right-0 top-0 w-app_sidebar_w h-screen bg-white dark:bg-gray-700  md:block transition-all border-l border-gray-500 ${
        showSidebar ? "right-0" : "-right-app_sidebar_w"
      }`}
    >
      سایدبار
      <button className="block" onClick={()=>dispatch(setShowSidebar(false))}>
        بستن منو
      </button>
      <button className="block" onClick={()=>dispatch(toggleTheme())}>
        دارک مود
      </button>
    </section>
  );
};

export default Sidebar;
