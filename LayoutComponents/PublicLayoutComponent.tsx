import { ReactNode } from 'react';
import { ReduxProvider } from '../features/Providers/ReduxProvider';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Navbar } from '@/components/Navbar/Navbar';

import './PublicLayoutComponent.scss';

interface IProps {
  children: ReactNode;
}

export const PublicLayoutComponent = ({ children }: IProps) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-component">
        <Navbar />
        {children}
      </div>
    </div>
  );
};