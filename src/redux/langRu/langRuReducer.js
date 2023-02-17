import { SET_LANG } from "./langUzType";

const initialState = {
  lang: '',
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
