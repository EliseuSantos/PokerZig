import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import pokemonsSaga from './pokemons/sagas';
import movesSaga from './moves/sagas';
import { pokemonsReducer } from './pokemons/reducer';
import { movesReducer } from './moves/reducer';
import { PokemonState } from './pokemons/types';
import { MoveState } from './moves/types';

export interface ApplicationState {
    pokemons: PokemonState;
    moves: MoveState;
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        pokemons: pokemonsReducer,
        moves: movesReducer,
        router: connectRouter(history),
    });

export function* rootSaga() {
    yield all([fork(pokemonsSaga), fork(movesSaga)]);
}
