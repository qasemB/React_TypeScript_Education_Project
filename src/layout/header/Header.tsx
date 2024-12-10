import { useAppDispatch } from "../../redux/reduxHooks";
import { setShowSidebar } from "../../redux/ui-management/uiManagement";

const Header = () => {
  const dispatch = useAppDispatch()
  return (
    <section
      id="header"
      className="fixed top-0 left-0 h-app_header_h w-full bg-white dark:bg-gray-700 md:pr-app_sidebar_w shadow-lg"
    >
      <button onClick={()=>dispatch(setShowSidebar(true))}>نمایش سایدبار</button>
    </section>
  );
};

export default Header;
