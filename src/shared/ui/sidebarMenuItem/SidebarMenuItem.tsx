import ArrowIcon from "@/assets/icons/arrorIcon";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { SidebarMenuProps } from "../sidebarMenu/sidebar.menu";
import { Text } from "../text";
import style from "./sidebarMenuItem.module.scss";

interface Props {
  menu: SidebarMenuProps;
  activeMenuId?: string | null;
  setActiveMenuId: (id: string | null) => void; 
}

const SidebarMenuItem = ({ menu, setActiveMenuId,activeMenuId}: Props) => {
  const location = useLocation();
  const isDropdown =
    activeMenuId === menu._id || location.pathname.startsWith(menu.path);
 
    const handleDropdown = () => {
      setActiveMenuId(isDropdown ? null : menu._id);
    };
  return (
    <li className={classNames(style.menu_item, { [style.active]: isDropdown && menu?.isParent})}>
      <div onClick={() => handleDropdown()}>
        <NavLink to={menu?.children? "#":menu?.path} className={classNames(style.link,{[style.link_active]:isDropdown && menu?.isParent})} >
          <span className={style.link_inner}>
            {menu.icon}
            <Text size="sm" color="black" fontWeight="regular">
              {menu.title}
            </Text>
          </span>
          {menu.children && (
            <span className={style.arrow_icon}>
              <ArrowIcon />
            </span>
          )}
        </NavLink>
      </div>
      {menu?.children && (
        <ul className={style.children}>
          {menu.children.map((child) => (
            <SidebarMenuItem
              key={child._id}
              menu={child}
              activeMenuId={activeMenuId}
              setActiveMenuId={setActiveMenuId}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenuItem;
