import { PublicLayoutComponent } from './PublicLayoutComponent';
import { PrivateLayoutComponent } from './PrivateLayoutComponent';
import { ReactNode } from 'react';
import { ReduxProvider } from '@/features/Providers/ReduxProvider';
import { Message } from '@/components/Message/Message';

interface IProps {
  children: ReactNode;
}
export const LayoutComponent = ({ children }: IProps) => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('key') : null;

  /* #Todo: change token value with real token for further development */
  const tokenValue = true;

  return (
    <>
      <Message />

      {tokenValue ? (
        <PublicLayoutComponent>
          <div className="main-component__section">
            <ReduxProvider>{children}</ReduxProvider>
          </div>
        </PublicLayoutComponent>
      ) : (
        <PrivateLayoutComponent token={token}>
          {children}
        </PrivateLayoutComponent>
      )}
    </>
  );
};
