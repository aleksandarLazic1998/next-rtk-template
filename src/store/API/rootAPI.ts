import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_ROUTE,
  prepareHeaders: (headers) => {
    headers.append('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    /* *** Try to get a new token

   const refreshResult = await baseQuery('/refreshToken', api, extraOptions);
     if (refreshResult.data) {
      *** store the new token
       api.dispatch(tokenReceived(refreshResult.data));
      *** retry the initial query
       result = await baseQuery(args, api, extraOptions);
    } else {
      *** Logout user
      api.dispatch(loggedOut());
    }*/
  }
  return result;
};

const rootApi = createApi({
  tagTypes: ['posts'],
  refetchOnFocus: true,
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});

export default rootApi;
