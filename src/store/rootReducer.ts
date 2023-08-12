import { combineReducers } from '@reduxjs/toolkit';
import rootApi from './API/rootAPI';
import PostsSlice from './State/Posts/postsSlice';
import AppSlice from './State/App/appSlice';

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  posts: PostsSlice.reducer,
  app: AppSlice.reducer,
});

export default rootReducer;
