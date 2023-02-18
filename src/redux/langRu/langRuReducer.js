import { SET_LANG_RU } from "./langRuType";

const initialState = {
  lang: '',
};

export const langRuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG_RU:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
