import { SidebarMenuItem } from "../sidebarMenuItem";
import { SIDEBAR_MENU_DATA, SidebarMenuProps } from "./sidebar.menu";

const SidebarMenu = () => {
  return (
    <div>
      <ul>
        {SIDEBAR_MENU_DATA.map((menu: SidebarMenuProps) => (
          <SidebarMenuItem
            key={menu._id}
            menu={menu}
            index={1}
            activeChildIndex={1}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
