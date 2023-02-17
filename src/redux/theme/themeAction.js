import { SET_THEME } from './themeType';

export const setTheme = () => {
  const theme = localStorage.getItem('theme' || '');
  return { type: SET_THEME, payload: theme };
};
