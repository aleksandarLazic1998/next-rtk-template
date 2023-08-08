import { PublicLayoutComponent } from './PublicLayoutComponent';
import { PrivateLayoutComponent } from './PrivateLayoutComponent';
import { ReactNode } from 'react';
import { ReduxProvider } from '@/features/Providers/ReduxProvider';
import { Message } from '@/components/Message/Message';
import ThemeRegistry from './ThemeRegistry';
import dynamic from 'next/dynamic';

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
            <ReduxProvider>
              <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
            </ReduxProvider>
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
