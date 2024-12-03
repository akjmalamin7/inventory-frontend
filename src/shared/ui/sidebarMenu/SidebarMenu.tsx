import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SidebarMenuItem } from "../sidebarMenuItem";
import { SIDEBAR_MENU_DATA, SidebarMenuProps } from "./sidebar.menu";

const SidebarMenu = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null)
  const location = useLocation();
  return (
    <div>
      <ul>
        {SIDEBAR_MENU_DATA.map((menu: SidebarMenuProps) => (
          <SidebarMenuItem
            key={menu._id}
            menu={menu}
            activeMenuId={activeMenuId || location.pathname}
            setActiveMenuId={setActiveMenuId} 
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
