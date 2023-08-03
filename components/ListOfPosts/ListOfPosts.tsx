'use client';
import { useAppSelector } from '@/hooks/redux';
import { useGetPostsQuery } from '@/src/store/API/services/PostsApiSlice';

export const ListOfPosts = () => {
  useGetPostsQuery({});

  const { list: posts } = useAppSelector((state) => state.posts.posts);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })
      ) : (
        <>No Posts</>
      )}
    </div>
  );
};
