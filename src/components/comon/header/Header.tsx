import { BurgerMenuIcon } from "@/assets/icons/burgerMenuIcon";
import AUTHOR from "@/assets/images/alamin.png";
import {
  avatarDropdown,
  toggleSidebar,
} from "@/redux/features/header/headerSlice";
import { Avatar } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { AvatarDropdown } from "../avatarDropdown";
import style from "./header.module.scss";
const Header = () => {
  const dispatch = useDispatch();
  const dropdown = useSelector((state: RootState) => state.header.isDropdown);
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const handleDropdown = () => {
    dispatch(avatarDropdown());
  };
  return (
    <div className={style.header_section}>
      <div className={style.left_column}>
        <div className={style.hamburger}>
          <Button size="sm" variant="text" onClick={handleSidebar}>
            <BurgerMenuIcon />
          </Button>
        </div>
        <div className={style.logo}></div>
      </div>
      <div className={style.right_column}>
        <div className={style.avatar}>
          <Avatar
            url={AUTHOR}
            name="Akjm"
            size="lg"
            radius="50%"
            onOk={handleDropdown}
          />
          {dropdown && <AvatarDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Header;
