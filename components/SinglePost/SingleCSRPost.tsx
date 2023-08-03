'use client';
import { ReactNode, useState } from 'react';

interface IProps {
  children: ReactNode;
}

export const SingleCSRPost = ({ children }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((state) => !state)}>Show Data</button>
      {isOpen && children}
    </div>
  );
};
