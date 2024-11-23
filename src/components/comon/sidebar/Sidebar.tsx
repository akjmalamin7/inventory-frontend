import CrossIcon from "@/assets/icons/crossIcon/CrossIcon";
import { toggleSidebar } from "@/redux/features/header/headerSlice";
import { Button } from "@/shared/ui/button";
import { useDispatch } from "react-redux";
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
    </div>
  );
};

export default Sidebar;
