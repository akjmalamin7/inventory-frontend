export interface LoginProps {
  email: string;
  password: string;
  error: string;
}
export const INIT_DATA_FOR_LOGIN: LoginProps = {
  email: "",
  password: "",
  error: "",
};
