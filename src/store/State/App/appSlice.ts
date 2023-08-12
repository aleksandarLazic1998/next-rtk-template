import IPosts from '@/typescript/interfaces/IPosts';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { postsApiSlice } from '../../API/RTKServices/PostsApiSlice';
import { PaletteMode } from '@mui/material';

interface IState {
  colorMode: PaletteMode;
}

const initialState: IState = {
  colorMode: 'light',
};
export const PostsNamespace = '[app]';

const AppSlice = createSlice({
  name: PostsNamespace,
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.colorMode = state.colorMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleColorMode } = AppSlice.actions;
export default AppSlice;
