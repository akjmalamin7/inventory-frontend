import IMG from "@/assets/images/loginIMG.png";
import { Container } from "@/components/comon/container";
import LoginForm from "@/components/pages/login/LoginForm";
import { Image } from "@/shared/ui/image";
import style from "./loginPage.module.scss";
const LoginPage = () => {
  return (
    <div className={style.login_page}>
      <Container size="md">
        <div className={style.login_page_content}>
          <div className={style.left_column}>
            <Image imgURL={IMG} className={style.image} />
          </div>
          <div className={style.right_column}>
            <LoginForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
