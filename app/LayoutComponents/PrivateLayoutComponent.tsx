'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface IProps {
  children: ReactNode;
  token: string | null;
}

export const PrivateLayoutComponent = ({ children, token }: IProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }
    // eslint-disable-next-line
  }, [token]);

  return token ? (
    <>{children}</>
  ) : (
    <>Something Went Wrong With Private Layout.</>
  );
};
