import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const PublicLayoutComponent = ({ children }: IProps) => {
  return <div className="layout">{children}</div>;
};
