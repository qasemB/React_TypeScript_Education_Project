import { ReactNode } from "react";
import { useAppSelector } from "../../redux/reduxHooks";

const SidebarContainer = ({ children }: { children: ReactNode }) => {
  const { showSidebar } = useAppSelector((state) => state.uiManagerReducer);

  return (
    <section
      id="sidebar"
      className={`p-3 fixed lg:right-0 top-0 w-app_sidebar_w h-screen bg-white dark:bg-gray-700  md:block transition-all border-l border-gray-500 ${
        showSidebar ? "right-0" : "-right-app_sidebar_w"
      }`}
    >
      {children}
    </section>
  );
};

export default SidebarContainer;
