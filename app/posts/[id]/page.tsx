import { SingleCSRPost } from '@/components/SinglePost/SingleCSRPost';
import { SingleSSRPost } from '@/components/SinglePost/SingleSSRPost';
import httpClient from '@/src/utils/httpClient';
import IPost from '@/typescript/interfaces/IPost';

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
