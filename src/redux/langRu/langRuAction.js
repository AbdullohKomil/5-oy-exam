import { SET_LANG_RU } from './langRuType';

export const setLangRu = () => {
  const PayloadInfo = localStorage.getItem('language') || 'uz';
  return { type: SET_LANG_RU, payload: PayloadInfo };
};
