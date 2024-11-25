import { LogoutIcon } from "@/assets/icons/logoutIcon";
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import { Button } from "@/shared/ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./logout.module.scss";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className={style.logout_wrapper}>
      <Button size="sm" variant="text" onClick={handleLogout}>
        <LogoutIcon />
        Logout
      </Button>
    </div>
  );
};

export default Logout;
