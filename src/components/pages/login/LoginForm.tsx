import { useLoginMutation } from "@/redux/features/auth/authApi";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Text } from "@/shared/ui/text";
import showError from "@/utils/ErrorMessage";
import showSuccess from "@/utils/SuccessMessage";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.scss";
import { INIT_DATA_FOR_LOGIN } from "./login.schema";

function LoginForm() {
  const [loginData, setLoginData] = useState(INIT_DATA_FOR_LOGIN);
  const [error, setError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
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
    if (data?.data?.token && data?.data?.data) {
      navigate("/");
    }

    if (loginError?.data?.message) {
      setError(loginError.data.message);
    }

    return () => {
      setLoginData(INIT_DATA_FOR_LOGIN);
      setError("");
    };
  }, [data, loginError, navigate]);

  return (
    <div className={style.wrapper}>
      <Card>
        <Card.Header>
          <Text textAlign="center" size="xl" fontWeight="medium">
            Log in to your account
          </Text>
          <Text textAlign="center" size="xm" fontWeight="regular" color="gray">
            Welcome back! Please enter your details.
          </Text>
        </Card.Header>
        <Card.Body>
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

            {error && (
              <Text size="xs" fontWeight="regular" color="red">
                {error}
              </Text>
            )}
            <div className={style.forgot_password}>
              <Text size="xm" fontWeight="regular" color="gray">
                Forgot your password?
              </Text>
              <Button size="sm" variant="text">
                <Text size="xm" fontWeight="medium" color="blue">
                  Click here
                </Text>
              </Button>
            </div>
            <Button
              variant="primary"
              size="sm"
              loading={isLoading}
              type="submit"
              disabled={!(isPasswordValid && loginData?.email)}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
            {loginData.password && (
              <div>
                <PasswordChecklist
                  className={style.password_check}
                  rules={[
                    "minLength",
                    "specialChar",
                    "number",
                    "capital",
                    "match",
                  ]}
                  minLength={6}
                  value={loginData.password}
                  valueAgain={loginData.password}
                  onChange={(isValid) => {
                    setIsPasswordValid(isValid);
                  }}
                />
              </div>
            )}
          </form>
        </Card.Body>
        <Card.Footer>
          <Text size="xm" fontWeight="regular" color="gray" textAlign="center">
            Don’t have an account?{" "}
            <Link to={"/registration"} className={style.sign_up_link}>
              Sign up
            </Link>{" "}
          </Text>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default LoginForm;
