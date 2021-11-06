import {CHANGE_THEME} from '../constants';
import {ThemeActionType} from "../types/theme";

const DEFAULT_THEME: string = 'light';

const themeReducer = (state = DEFAULT_THEME, action: ThemeActionType): string => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;

    default:
      return state;
  }
};

export default themeReducer;