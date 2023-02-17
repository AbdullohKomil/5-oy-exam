import { tokenReducer } from './token/tokenReducer';

import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { themeReducer } from './theme/themeReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  theme: themeReducer,
});
