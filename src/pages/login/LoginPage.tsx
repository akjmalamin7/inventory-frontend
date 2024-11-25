import { Container } from "@/components/comon/container";
import LoginForm from "@/components/pages/login/LoginForm";
import style from "./loginPage.module.scss";
const LoginPage = () => {
  return (
    <div className={style.login_page}>
      <Container size="xsm">
        <LoginForm />
      </Container>
    </div>
  );
};

export default LoginPage;
