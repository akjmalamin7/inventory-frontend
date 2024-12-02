import { useState } from "react";
import { SidebarMenuItem } from "../sidebarMenuItem";
import { SIDEBAR_MENU_DATA, SidebarMenuProps } from "./sidebar.menu";

const SidebarMenu = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null)
  return (
    <div>
      <ul>
        {SIDEBAR_MENU_DATA.map((menu: SidebarMenuProps) => (
          <SidebarMenuItem
            key={menu._id}
            menu={menu}
            activeMenuId={activeMenuId}
            setActiveMenuId={setActiveMenuId} 
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
