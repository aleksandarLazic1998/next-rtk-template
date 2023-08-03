import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootApi from './API/rootAPI';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(rootApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export default makeStore;
