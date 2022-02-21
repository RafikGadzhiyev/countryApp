import * as actions from './../../types/ActionsType'

export const DarkMode = (): actions.ThemeAction => {
    return {
        type: "SWITCH_TO_DARK",
        payload: {
            currentTheme: 'dark'
        }
    }
}

export const LightMode = (): actions.ThemeAction => {
    return {
        type: "SWITCH_TO_LIGHT",
        payload: {
            currentTheme: "light"
        }
    }
}