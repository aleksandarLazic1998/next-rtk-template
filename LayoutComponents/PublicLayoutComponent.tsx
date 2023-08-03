'use client';
import { ReactNode } from 'react';
import { ReduxProvider } from '../features/Providers/ReduxProvider';

interface IProps {
  children: ReactNode;
}

export const PublicLayoutComponent = ({ children }: IProps) => {
  return (
    <div className="layout">
      <ReduxProvider>{children}</ReduxProvider>
    </div>
  );
};
