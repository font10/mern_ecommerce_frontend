import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const addressesApi = createApi({
  reducerPath: 'addressesApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getAddresesByUser: builder.query({
    query: (id) => `/address/${id}`,
    method: 'GET',
    providesTags: ["Addresses"],
  }),
  getAddressById: builder.query({
    query: (id) => `/address/edit/${id}`,
    method: 'GET',
    providesTags: ["AddressId"],
  }),
  createAddress: builder.mutation({
    query: ({ token, ...newAddress }) => ({
      url: '/address',
      method: 'POST',
      body: newAddress.newAddress,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['Addresses']
  }),
  editAddress: builder.mutation({
    query: ({ token, ...newAddress }) => ({
      url: `/address/${newAddress.newAddress._id}`,
      method: 'PATCH',
      body: newAddress.newAddress,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['Addresses']
  }),
  deleteAddress: builder.mutation({
    query: ({ id, token }) => ({
      url: `/address/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['Addresses']
  }),
  async onQueryStarted({ id, ...rest }, { dispatch, queryFulfilled }) {
    const patchResult = dispatch(
      addressesApi.util.updateQueryData('getAddresesByUser', id, (draft) => {
        Object.assign(draft, rest)
      }),
      addressesApi.util.updateQueryData('getAddressById', id, (draft) => {
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

export const { useGetAddresesByUserQuery, useGetAddressByIdQuery, useCreateAddressMutation, useEditAddressMutation, useDeleteAddressMutation } = addressesApi
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