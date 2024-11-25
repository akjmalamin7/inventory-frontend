import LOGO from "@/assets/images/ICON_LOGO.png";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { Button } from "@/shared/ui/button";
import { Image } from "@/shared/ui/image";
import { Input } from "@/shared/ui/input";
import { Text } from "@/shared/ui/text";
import showError from "@/utils/ErrorMessage";
import showSuccess from "@/utils/SuccessMessage";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.scss";
import { INIT_DATA_FOR_LOGIN } from "./login.schema";
function LoginForm() {
  const [loginData, setLoginData] = useState(INIT_DATA_FOR_LOGIN);
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();
  const [login, { data, isLoading, error: loginError }] = useLoginMutation();

  /* @______ handle change ______@ */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* @______ handle form submit ______@ */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login({
        email: loginData.email,
        password: loginData.password,
      }).unwrap();
      showSuccess({ message: "Login successful!" });
    } catch (error) {
      showError({ message: "Login failed! Please check your credentials." });
      console.error("Login failed:", error);
    }
  };

  /* @______ checking ______@ */
  useEffect(() => {
    // Checking data and navigating only when valid data is present
    if (data?.data?.token && data?.data?.data) {
      navigate("/");
    }

    // Checking for error
    if (loginError?.data?.message) {
      setError(loginError.data.message);
    }

    return () => {
      setLoginData(INIT_DATA_FOR_LOGIN);
      setError("");
    };
  }, [data, loginError, navigate]); // Only trigger when data or loginError changes

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.logo}>
          <Image imgURL={LOGO} width="50px" />
        </div>
        <div className={style.heading}>
          <Text textAlign="center" size="lg" fontWeight="semiBold">
            Log in to your account
          </Text>
          <Text textAlign="center" size="sm" color="gray">
            Welcome back! Please enter your details.
          </Text>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="User Email"
          value={loginData.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="User Password"
          value={loginData.password}
          onChange={handleChange}
        />
        {/* Error Display */}
        {error && <div className="alert alert-danger">{error}</div>}

        <Button
          variant={
            loginData.email && loginData.password ? "primary" : "disabled"
          }
          size="sm"
          loading={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : "Next"}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
