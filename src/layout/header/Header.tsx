import { useAppDispatch } from "../../redux/reduxHooks";
import { setShowSidebar } from "../../redux/ui-management/uiManagement";

const Header = () => {
  const dispatch = useAppDispatch()
  return (
    <section
      id="header"
      className="fixed top-0 left-0 h-app_header_h w-full bg-red-400 md:pr-app_sidebar_w"
    >
      <button onClick={()=>dispatch(setShowSidebar(true))}>نمایش سایدبار</button>
    </section>
  );
};

export default Header;
