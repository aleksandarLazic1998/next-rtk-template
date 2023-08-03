import IPost from '@/typescript/interfaces/IPost';
import 'server-only';

const getSinglePostData = async (id: string): Promise<IPost> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/posts/${id}`,
  );
  const data: IPost = await response.json();

  return data;
};

export async function SingleSSRPost({ id }: { id: string }) {
  const data = await getSinglePostData(id);

  return (
    <div>
      {data.title}
      <p>{data.userId}</p>
    </div>
  );
}
