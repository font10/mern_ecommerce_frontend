import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'http://mern-ecommerce-backend-liart.vercel.app',
 }),

 endpoints: (builder) => ({
  signIn: builder.mutation({
    query: (infoSignIn) => ({
      url: '/auth/signin',
      method: 'POST',
      body: infoSignIn,
    }),
  }),
  signUp: builder.mutation({
    query: (infoSignUp) => ({
      url: '/auth/signup',
      method: 'POST',
      body: infoSignUp,
    }),
  }),
 })
})

export const { useSignInMutation, useSignUpMutation } = authApi
