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
    providesTags: ['Comments'],
  }),
  getCommentsByUser: builder.query({
    query: (id) => `/comment/user/${id}`,
    method: 'GET',
    providesTags: ['CommentsByUser'],
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
  deleteComment: builder.mutation({
    query: ({ id, token }) => ({
      url: `/comment/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['CommentsByUser']
  }),
  async onQueryStarted({ id, ...rest }, { dispatch, queryFulfilled }) {
    const patchResult = dispatch(
      commentApi.util.updateQueryData('getCommentsByUser', id, (draft) => {
        Object.assign(draft, rest)
      })
    )
    try {
      await queryFulfilled
    } catch {
      patchResult.undo()
    }
  },
 })
})

export const { useGetCommentsByProductQuery, useGetCommentsByUserQuery, useCreateCommentMutation, useDeleteCommentMutation } = commentApi
