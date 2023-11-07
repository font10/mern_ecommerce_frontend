import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const externalApi = createApi({
  reducerPath: 'externalApi',

 baseQuery: fetchBaseQuery({
  baseUrl: 'https://countriesnow.space/api/v0.1',
 }),

 endpoints: (builder) => ({
  getCountries: builder.query({
    query: () => `/countries`,
    method: 'GET',
  }),
 })
})

export const { useGetCountriesQuery } = externalApi
