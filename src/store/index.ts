import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import pokemonsSaga from './pokemons/sagas';
import { pokemonsReducer } from './pokemons/reducer';
import { PokemonState } from './pokemons/types';

export interface ApplicationState {
    pokemons: PokemonState;
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        pokemons: pokemonsReducer,
        router: connectRouter(history),
    });

export function* rootSaga() {
    yield all([fork(pokemonsSaga)]);
}
