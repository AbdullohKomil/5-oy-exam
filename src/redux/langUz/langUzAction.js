import { SET_LANG_UZ } from './langUzType';

export const setLangUz = () => {
  const PayloadInfo = localStorage.getItem('language') || 'uz';
  return { type: SET_LANG_UZ, payload: PayloadInfo };
};
