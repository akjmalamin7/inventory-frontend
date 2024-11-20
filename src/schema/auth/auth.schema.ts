export interface UserSchema {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: string;
}
interface AuthState {
  token: string | null;
  user: User;
}
export const AUTH_INITIAL_STATE: AuthState = {
  token: null,
  user: null,
};