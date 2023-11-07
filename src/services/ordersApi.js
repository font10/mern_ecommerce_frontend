import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://mern-ecommerce-backend-liart.vercel.app',
  }),
 endpoints: (builder) => ({
  getOrdersByUser: builder.query({
    query: (id) => `/orders/${id}`,
    method: 'GET',
    providesTags: ["Orders"],
  }),
  createOrder: builder.mutation({
    query: ({ token, ...newOrder }) => ({
      url: '/orders',
      method: 'POST',
      body: newOrder.orderToAdd,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['Orders']
  }),
  deleteOrder: builder.mutation({
    query: ({ id, token }) => ({
      url: `/orders/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['Orders']
  }),
  async onQueryStarted({ id, ...rest }, { dispatch, queryFulfilled }) {
    const patchResult = dispatch(
      ordersApi.util.updateQueryData('getOrdersByUser', id, (draft) => {
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

export const { useGetOrdersByUserQuery, useCreateOrderMutation, useDeleteOrderMutation } = ordersApi
