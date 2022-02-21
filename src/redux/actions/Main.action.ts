import * as actions from './../../types/ActionsType'

export function init(): actions.MainAction {
    return {
        type: '__INIT__'
    }
}