import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'https://mern-ecommerce-api-b2jl.onrender.com',
 }),

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
  createProduct: builder.mutation({
    query: ({token, ...newProduct}) => ({
      url: '/product',
      method: 'POST',
      body: newProduct.newProduct,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }),
    invalidatesTags: ['Products']
  }),
 })
})

export const { useGetProductsQuery, useGetProductsByFilterQuery, useGetProductByIdQuery, useCreateProductMutation } = productApi
