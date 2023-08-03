import { ListOfPosts } from '@/components/ListOfPosts/ListOfPosts';
import makeStore from '@/src/store/store';
import { StoreInstance } from '@/src/utils/storeInstance';
import Image from 'next/image';

export default function PostsPage() {
  return (
    <main>
      <ListOfPosts />
    </main>
  );
}
