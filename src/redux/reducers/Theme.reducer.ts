import * as actions from './../../types/ActionsType'

export function ThemeSwitcher(state: Object = {
    currentTheme: 'light'
}, action: actions.ThemeAction) {
    switch (action.type) {
        case "SWITCH_TO_DARK":
            return {
                ...state,
                currentTheme: action.payload?.currentTheme
            };
        case "SWITCH_TO_LIGHT":
            return {
                ...state,
                currentTheme: action.payload?.currentTheme
            };
        default:
            return state;
    }
}