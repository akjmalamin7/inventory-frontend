import { Logout } from "../logout";
import style from "./avatarDropdown.module.scss";
const AvatarDropdown = () => {
  return (
    <div className={style.wrapper}>
      <Logout />
    </div>
  );
};

export default AvatarDropdown;
