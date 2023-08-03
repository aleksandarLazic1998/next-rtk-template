import { SingleCSRPost } from '@/components/SinglePost/SingleCSRPost';
import { SingleSSRPost } from '@/components/SinglePost/SingleSSRPost';
import IPost from '@/typescript/interfaces/IPost';
import 'server-only';

const getSinglePostData = async (id: string): Promise<IPost> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/posts/${id}`,
  );
  const data: IPost = await response.json();

  return data;
};

async function SinglePost({ params }: { params: { id: string } }) {
  return (
    <div>
      <SingleCSRPost>
        <SingleSSRPost id={params.id} />
      </SingleCSRPost>
    </div>
  );
}

export default SinglePost;
