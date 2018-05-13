import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import AssetsReducer from './assetReducer';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  posts: PostsReducer,
  assets: AssetsReducer
});

export default rootReducer;
