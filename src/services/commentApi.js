import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const commentApi = createApi({
  reducerPath: 'commentApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getCommentsByProduct: builder.query({
    query: (id) => `/comment/${id}`,
    method: 'GET',
    providesTags: ["Comments"],
  }),
  createComment: builder.mutation({
    query: ({token, ...newComment}) => ({
      url: '/comment',
      method: 'POST',
      body: newComment.inputs,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['Comments']
  }),
 })
})

export const { useGetCommentsByProductQuery, useCreateCommentMutation } = commentApi
