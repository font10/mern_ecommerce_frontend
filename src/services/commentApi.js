import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const commentApi = createApi({
  reducerPath: 'commentApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'https://mern-ecommerce-backend-liart.vercel.app',
 }),

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
