import { combineReducers } from '@reduxjs/toolkit';
import rootApi from './API/rootAPI';
import PostsSlice from './State/Posts/postsSlice';

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  posts: PostsSlice.reducer,
});

export default rootReducer;
