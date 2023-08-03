import rootApi from '../rootAPI';
import IPost from '@/typescript/interfaces/IPost';
import { queryBuilder } from '@/src/utils/queryBuilder';

export const postsApiSlice = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], unknown>({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = postsApiSlice;
