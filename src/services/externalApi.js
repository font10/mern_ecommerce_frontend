import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is used to define our endpoints and allow to create the API slice
export const externalApi = createApi({
  reducerPath: 'externalApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://countriesnow.space/api/v0.1',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getCountries: builder.query({
    query: () => `/countries`,
    method: 'GET',
  }),
 })
})

export const { useGetCountriesQuery } = externalApi
