import { IconType } from "react-icons";

type SidebarItemType = {
  title: string;
  Icon: IconType;
};
const SidebarItem = ({ Icon, title }: SidebarItemType) => {
  return (
    <li>
      <span className="flex items-center gap-3">
        <Icon size={24}/>
        {title}
      </span>
    </li>
  );
};

export default SidebarItem;
