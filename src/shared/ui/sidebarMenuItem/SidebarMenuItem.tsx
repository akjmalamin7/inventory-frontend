import { NavLink } from "react-router-dom";
import { SidebarMenuProps } from "../sidebarMenu/sidebar.menu";
import { Text } from "../text";
import style from "./sidebarMenuItem.module.scss";

interface Props {
  menu: SidebarMenuProps;
  activeChildIndex?: number;
  index?: number;
}

const SidebarMenuItem = ({ menu, activeChildIndex, index }: Props) => {
  return (
    <li className={style.menu_item}>
      <NavLink to={menu?.path} className={style.link}>
        {menu.icon}
        <Text size="sm" color="black" fontWeight="regular">
          {menu.title}
        </Text>
      </NavLink>
      {menu?.children && (
        <ul className={style.children}>
          {menu.children.map((child, childIndex) => (
            <SidebarMenuItem
              key={child._id}
              menu={child}
              activeChildIndex={childIndex}
              index={childIndex}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenuItem;
