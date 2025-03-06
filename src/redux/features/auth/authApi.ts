import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signUp",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
