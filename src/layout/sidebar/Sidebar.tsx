import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { setShowSidebar } from "../../redux/ui-management/uiManagement";

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const {showSidebar} = useAppSelector(state=>state.uiManagerReducer)
  return (
    <section
      id="sidebar"
      className={`fixed lg:right-0 top-0 w-app_sidebar_w h-screen bg-blue-400  md:block transition-all ${
        showSidebar ? "right-0" : "-right-app_sidebar_w"
      }`}
    >
      سایدبار
      <button onClick={()=>dispatch(setShowSidebar(false))}>
        بستن منو
      </button>
    </section>
  );
};

export default Sidebar;
