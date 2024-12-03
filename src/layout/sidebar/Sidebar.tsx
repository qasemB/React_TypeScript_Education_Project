const Sidebar = ({
  showSidebar,
  setHiddenSidebar,
}: {
  showSidebar: boolean;
  setHiddenSidebar: () => void;
}) => {
  return (
    <section
      id="sidebar"
      className={`fixed lg:right-0 top-0 w-app_sidebar_w h-screen bg-blue-400  md:block transition-all ${
        showSidebar ? "right-0" : "-right-app_sidebar_w"
      }`}
    >
      سایدبار
      <button onClick={setHiddenSidebar}>
        بستن منو
      </button>
    </section>
  );
};

export default Sidebar;
