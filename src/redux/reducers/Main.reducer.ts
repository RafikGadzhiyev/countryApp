import * as actions from './../../types/ActionsType'

// https://restcountries.com/v3.1/all -fetching data

export function MainReducer(state: object = {}, action: actions.MainAction) {
    switch (action.type) {
        case '__INIT__':

            return {
                ...state,
            }
        default: return state;
    }
}

// async function getCountries() {
//     let response = await fetch('https://restcountries.com/v3.1/all');

//     return await response.json();
// }