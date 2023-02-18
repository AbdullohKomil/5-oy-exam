import { SET_LANG_UZ } from "./langUzType";

const initialState = {
  lang: '',
};

export const langUzReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG_UZ:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
