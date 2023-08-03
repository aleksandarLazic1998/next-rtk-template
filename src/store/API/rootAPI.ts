import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rootApi = createApi({
  tagTypes: [],
  refetchOnFocus: true,
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ROUTE,
    prepareHeaders: (headers) => {
      headers.append('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default rootApi;
