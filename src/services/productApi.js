import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const productApi = createApi({
  reducerPath: 'productApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getProducts: builder.query({
    query: () => '/product',
    method: 'GET',
    providesTags: ['Products'],  
  }),
  getProductById: builder.query({
    query: (id) => `/product/${id}`,
  }),
  getProductsByFilter: builder.query({
    query: (params) => params,
    method: 'GET',
    providesTags: ['Products'],  
  }),
 })
})

export const { useGetProductsQuery, useGetProductsByFilterQuery, useGetProductByIdQuery } = productApi
