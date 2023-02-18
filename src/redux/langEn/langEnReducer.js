import { SET_LANG_EN } from "./langEnType";

const initialState = {
  lang: '',
};

export const langEnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG_EN:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
