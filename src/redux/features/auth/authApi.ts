import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/user-registration",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user-login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result?.data?.data?.token,
              user: result?.data?.data?.data,
            })
          );
          dispatch(
            userLoggedIn({
              token: result.data.data.token,
              user: result.data.data.data,
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useLoginMutation, useRegistrationMutation } = authApi;
