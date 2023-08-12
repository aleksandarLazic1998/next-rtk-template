import { PublicLayoutComponent } from './PublicLayoutComponent';
import { PrivateLayoutComponent } from './PrivateLayoutComponent';
import { ReactNode } from 'react';
import { ReduxProvider } from '@/features/Providers/ReduxProvider';
import { Message } from '@/components/Message/Message';
import dynamic from 'next/dynamic';
import MuiThemeProvider from './MuiThemeProvider';

interface IProps {
  children: ReactNode;
}
export const LayoutComponent = ({ children }: IProps) => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('key') : null;

  /* #Todo: change token value with real token for further development */
  const tokenValue = true;

  return (
    <ReduxProvider>
      <MuiThemeProvider>
        <Message />
        {tokenValue ? (
          <PublicLayoutComponent>
            <div className="main-component__section">{children}</div>
          </PublicLayoutComponent>
        ) : (
          <PrivateLayoutComponent token={token}>
            {children}
          </PrivateLayoutComponent>
        )}
      </MuiThemeProvider>
    </ReduxProvider>
  );
};
