'use client';
import { useAppSelector } from '@/hooks/redux';
import { useGetPostsQuery } from '@/src/store/API/services/PostsApiSlice';
import Link from 'next/link';

export const ListOfPosts = () => {
  useGetPostsQuery({});

  const { list: posts } = useAppSelector((state) => state.posts.posts);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          );
        })
      ) : (
        <>No Posts</>
      )}
    </div>
  );
};
