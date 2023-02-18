import { SET_LANG_EN } from './langEnType';

export const setLangEn = () => {
  const PayloadInfo = localStorage.getItem('language') || 'uz';
  return { type: SET_LANG_EN, payload: PayloadInfo };
};
