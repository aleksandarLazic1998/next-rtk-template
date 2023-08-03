import { PublicLayoutComponent } from './PublicLayoutComponent';
import { PrivateLayoutComponent } from './PrivateLayoutComponent';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
export const LayoutComponent = ({ children }: IProps) => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('key') : null;

  /* #Todo: change token value with real token for further development */
  const tokenValue = true;

  return tokenValue ? (
    <PublicLayoutComponent>{children}</PublicLayoutComponent>
  ) : (
    <PrivateLayoutComponent token={token}>{children}</PrivateLayoutComponent>
  );
};
