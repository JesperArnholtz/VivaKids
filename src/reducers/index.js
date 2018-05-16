import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import AssetsReducer from './assetReducer';
import NavigationReducer from './navigationReducer';
import MusicReducer from './musicReducer';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  blogs: PostsReducer,
  assets: AssetsReducer,
  links: NavigationReducer,
  music: MusicReducer
});

export default rootReducer;
