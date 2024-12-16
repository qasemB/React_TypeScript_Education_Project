import { IoCloseOutline, IoMoon, IoSunnyOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import {
  setShowSidebar,
  toggleTheme,
} from "../../redux/ui-management/uiManagement";

const TopActionElements = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.uiManagerReducer);
  return (
    <div className="flex justify-between md:justify-end items-center">
      <button
        className="block md:hidden"
        onClick={() => dispatch(setShowSidebar(false))}
      >
        <IoCloseOutline size={24} />
      </button>
      <button
        className={`block transform transition-all ${
          theme === "dark" && "rotate-45"
        }`}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "dark" ? <IoSunnyOutline size={24} /> : <IoMoon size={24} />}
      </button>
    </div>
  );
};

export default TopActionElements;
