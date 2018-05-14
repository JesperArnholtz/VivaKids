import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import AssetsReducer from './assetReducer';
import NavigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  blogs: PostsReducer,
  assets: AssetsReducer,
  links: NavigationReducer
});

export default rootReducer;
