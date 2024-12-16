import { IconType } from "react-icons";
import { NavLink, To } from "react-router";

type SidebarItemType = {
  title: string;
  Icon: IconType;
  to: To;
};
const SidebarItem = ({ Icon, title, to }: SidebarItemType) => {
  return (
    <li>
      <NavLink to={to} className={({isActive})=>`flex items-center gap-3 p-1 rounded-md transition-all ${isActive && "bg-sky-500 text-white"}`}>
        <Icon size={24} />
        {title}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
