import CrossIcon from "@/assets/icons/crossIcon/CrossIcon";
import { toggleSidebar } from "@/redux/features/header/headerSlice";
import { Button } from "@/shared/ui/button";
import { SidebarMenu } from "@/shared/ui/sidebarMenu";
import { useDispatch } from "react-redux";
import { Logout } from "../logout";
import style from "./sidebar.module.scss";
const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={style.sidebar_area}>
      <div className={style.cross}>
        <Button variant="text" onClick={handleSidebar}>
          <CrossIcon size="lg" />
        </Button>
      </div>
      <div className={style.sidebar_body}>
        <SidebarMenu />
      </div>
      <div className={style.sidebar_footer}>
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
