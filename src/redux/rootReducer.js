import { tokenReducer } from './token/tokenReducer';

import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});
