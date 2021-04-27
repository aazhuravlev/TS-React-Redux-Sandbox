import {ThemeActionType} from "../types/theme";

const changeTheme = (themeName: string): ThemeActionType => ({
    type: 'CHANGE_THEME',
    payload: themeName
});

export {
    changeTheme,
}