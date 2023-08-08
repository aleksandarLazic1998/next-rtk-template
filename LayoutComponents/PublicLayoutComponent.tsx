import { ReactNode } from 'react';
import { ReduxProvider } from '../features/Providers/ReduxProvider';

import './PublicLayoutComponent.scss';
import Navbar from '@/components/Navbar/Navbar';

interface IProps {
  children: ReactNode;
}

export const PublicLayoutComponent = ({ children }: IProps) => {
  return (
    <div className="app-layout">
      <div className="main-component">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
