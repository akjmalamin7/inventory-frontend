import { Container } from "@/components/comon/container";
import RegistrationForm from "@/components/pages/registration";
import style from "./registration.module.scss";
const Registration = () => {
  return (
    <div className={style.registration_page}>
      <Container size="md">
        <RegistrationForm />
      </Container>
    </div>
  );
};

export default Registration;
