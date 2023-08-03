import IPosts from '@/src/typescript/interfaces/IPosts';
import IResponse from '@/src/typescript/interfaces/IResponse';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  posts: { list: IPosts[] };
}

const initialState: IState = {
  posts: { list: [] },
};
export const PostsNamespace = '[posts]';

export const PostsSlice = createSlice({
  name: PostsNamespace,
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const {} = PostsSlice.actions;
