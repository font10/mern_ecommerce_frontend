import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addressesApi = createApi({
  reducerPath: 'addressesApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'http://mern-ecommerce-backend-liart.vercel.app',
 }),

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
    invalidatesTags: ['AddressId']
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
    invalidatesTags: ['AddressId']
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
    invalidatesTags: ['AddressId']
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
