import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
 }),

 endpoints: (builder) => ({
  updateUser: builder.mutation({
    query: ({ token, ...newUserInfo }) => ({
      url: `/user/${newUserInfo.newUserInfo.id}`,
      method: 'PATCH',
      body: newUserInfo.newUserInfo,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
  }),
  changePassword: builder.mutation({
    query: ({ token, ...userInfo }) => ({
      url: `/user/password/${userInfo.userInfo.id}`,
      method: 'PATCH',
      body: userInfo.userInfo,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
  }),
 })
})

export const { useUpdateUserMutation, useChangePasswordMutation } = userApi
