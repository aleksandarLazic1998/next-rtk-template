import httpClient from '@/src/utils/httpClient';
import IPost from '@/typescript/interfaces/IPost';

const getSinglePostData = async (id: string): Promise<IPost> => {
  const response = await httpClient.get(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/posts/${id}`,
  );

  return response.data;
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
