import { SET_LANG } from './langUzType';

export const setTheme = () => {
  const PayloadInfo = localStorage.getItem('language') || 'uz';
  return { type: SET_LANG, payload: PayloadInfo };
};
