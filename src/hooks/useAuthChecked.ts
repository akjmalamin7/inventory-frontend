import { userLoggedIn } from "@/redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    if (localAuth) {
      try {
        const auth = JSON.parse(localAuth);
        if (auth?.token && auth?.user) {
          dispatch(
            userLoggedIn({
              token: auth.token,
              user: auth.user,
            })
          );
        }
      } catch (error) {
        console.error("Error parsing auth data from localStorage:", error);
      }
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
}
