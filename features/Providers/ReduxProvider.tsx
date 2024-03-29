'use client';
import store from '@/src/store/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

interface IProps {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};
