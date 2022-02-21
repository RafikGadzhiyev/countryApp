import { createStore, combineReducers, compose } from 'redux';
import { MainReducer } from '../reducers/Main.reducer';
import { ThemeSwitcher } from '../reducers/Theme.reducer';

const allReducers = combineReducers({ MainReducer, ThemeSwitcher });

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainStore = createStore(
    allReducers,
    composeEnhancers()
);

export default mainStore;