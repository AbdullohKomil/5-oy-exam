import { tokenReducer } from './token/tokenReducer';

import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { themeReducer } from './theme/themeReducer';
import { langUzReducer } from './langUz/langUzReducer';
import { langEnReducer } from './langEn/langEnReducer';
import { langRuReducer } from './langRu/langRuReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  theme: themeReducer,
  langUz: langUzReducer,
  langEn: langEnReducer,
  langRu: langRuReducer,
});
