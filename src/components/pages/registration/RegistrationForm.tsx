import { useRegistrationMutation } from "@/redux/features/auth/authApi";
import { UserSchema } from "@/shared/schema/auth/auth.schema";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Text } from "@/shared/ui/text";
import showError from "@/utils/ErrorMessage";
import showSuccess from "@/utils/SuccessMessage";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { Link, useNavigate } from "react-router-dom";
import style from "./registrationForm.module.scss";
const INIT_DATA_FOR_REGISTRATION: UserSchema = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  photo: "",
};
const RegistrationForm = () => {
  const [registerData, setRegisterData] = useState(INIT_DATA_FOR_REGISTRATION);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [registration, { data, isLoading, error: registrationError }] =
    useRegistrationMutation();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Validate phone number
    if (!/^\d{11}$/.test(registerData.mobile)) {
      return showError({
        message: "Please enter a valid 10-digit phone number.",
      });
    }
    try {
      await registration({
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        email: registerData.email,
        mobile: registerData.mobile,
        password: registerData.password,
        photo: registerData.photo,
      }).unwrap();
      showSuccess({ message: "Account create successful!" });
    } catch (err) {
      showError({ message: "Account create failed! Please check." });
      console.error("Account create failed:", err);
    }
  };

  /* @______ checking ______@ */
  useEffect(() => {
    if (data?.data) {
      navigate("/login");
    }

    if (registrationError?.data?.message) {
      setError(registrationError.data.message);
    }

    return () => {
      setRegisterData(INIT_DATA_FOR_REGISTRATION);
      setError("");
    };
  }, [data, registrationError, navigate]);
  return (
    <div className={style.wrapper}>
      <Card className={style.card}>
        <Card.Header>
          <Text textAlign="center" size="xl" fontWeight="medium">
            Create Your Account
          </Text>
          <Text textAlign="center" size="xm" fontWeight="regular" color="gray">
            Sign up to explore amazing features and stay connected!
          </Text>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit} className={style.form}>
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              value={registerData.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={registerData.lastName}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="photo"
              placeholder="Photo"
              value={registerData.photo}
              onChange={handleChange}
            />
            <Input
              type="string"
              name="mobile"
              placeholder="Phone"
              value={registerData.mobile}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="User Password"
              value={registerData.password}
              onChange={handleChange}
            />

            {error && (
              <Text size="xs" fontWeight="regular" color="red">
                {error}
              </Text>
            )}

            <div className={style.button_wrapper}>
              <Button
                variant={"primary"}
                size="sm"
                disabled={
                  isLoading ||
                  !(
                    registerData.firstName &&
                    registerData.lastName &&
                    registerData.email &&
                    registerData.mobile &&
                    registerData.password &&
                    isPasswordValid
                  )
                }
                type="submit"
              >
                {isLoading ? "Loading..." : "Registration"}
              </Button>
            </div>
            {registerData.password && (
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
                  value={registerData.password}
                  valueAgain={registerData.password}
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
            Already have an account?
            <Link to={"/login"} className={style.sign_up_link}>
              Signin
            </Link>
          </Text>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default RegistrationForm;
