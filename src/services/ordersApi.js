import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const ordersApi = createApi({
  reducerPath: 'ordersApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getOrdersByUser: builder.query({
    query: (id) => `/orders/${id}`,
    method: 'GET',
    providesTags: ["Orders"],
  }),
  getOrdersById: builder.query({
    query: (id) => `/address/edit/${id}`,
    method: 'GET',
    providesTags: ["AddressId"],
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
 })
})

export const { useGetOrdersByUserQuery, useGetOrdersByIdQuery, useCreateOrderMutation } = ordersApi
/*
 async onQueryStarted({ id, ...rest }, { dispatch, queryFulfilled }) {
    const patchResult = dispatch(
      addressesApi.util.updateQueryData('getAddresesByUser', id, (draft) => {
        Object.assign(draft, rest)
      })
    )
    try {
      await queryFulfilled
    } catch {
      patchResult.undo()
    }
  },
*/