const Header = ({ setShowSidebar }: { setShowSidebar: () => void }) => {
  return (
    <section
      id="header"
      className="fixed top-0 left-0 h-app_header_h w-full bg-red-400 md:pr-app_sidebar_w"
    >
      <button onClick={setShowSidebar}>نمایش سایدبار</button>
    </section>
  );
};

export default Header;
