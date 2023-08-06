import { ListOfPosts } from '@/components/ListOfPosts/ListOfPosts';
import Image from 'next/image';

export default async function PostsPage() {
  return (
    <main>
      <ListOfPosts />
    </main>
  );
}
