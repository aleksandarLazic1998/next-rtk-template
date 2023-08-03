'use client';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div>
      404 Page not found
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};
export default NotFound;
