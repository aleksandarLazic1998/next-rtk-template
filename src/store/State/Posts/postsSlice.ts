import IPosts from '@/typescript/interfaces/IPosts';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { postsApiSlice } from '../../API/RTKServices/PostsApiSlice';

interface IState {
  posts: { list: IPosts[] };
}

const initialState: IState = {
  posts: { list: [] },
};
export const PostsNamespace = '[posts]';

const PostsSlice = createSlice({
  name: PostsNamespace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      postsApiSlice.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state.posts.list = action.payload;
      },
    );
  },
});

export const {} = PostsSlice.actions;
export default PostsSlice;
