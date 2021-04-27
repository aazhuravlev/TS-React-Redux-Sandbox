import {CHANGE_THEME} from "../constants";

interface IChangeThemeAction {
    type: typeof CHANGE_THEME,
    payload: string,
}

export type ThemeActionType = IChangeThemeAction;