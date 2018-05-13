import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  posts: PostsReducer
});

export default rootReducer;
