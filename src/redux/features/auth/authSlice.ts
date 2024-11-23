import { createSlice } from "@reduxjs/toolkit";
import {
  AUTH_INITIAL_STATE,
  UserSchema,
} from "../../../shared/schema/auth/auth.schema";

const authSlice = createSlice({
  name: "auth",
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    userLoggedIn: (
      state,
      action = PayloadAction<{ token: string; user: UserSchema }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
