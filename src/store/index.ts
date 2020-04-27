import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import pokemonsSaga from './pokemons/sagas';
import movesSaga from './moves/sagas';
import abilitiesSaga from './abilities/sagas';
import formsSaga from './forms/sagas';
import { pokemonsReducer } from './pokemons/reducer';
import { movesReducer } from './moves/reducer';
import { abilitiesReducer } from './abilities/reducer';
import { formsReducer } from './forms/reducer';
import { PokemonState } from './pokemons/types';
import { MoveState } from './moves/types';
import { AbilityState } from './abilities/types';
import { FormState } from './forms/types';

export interface ApplicationState {
    pokemons: PokemonState;
    moves: MoveState;
    abilities: AbilityState;
    forms: FormState;
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        pokemons: pokemonsReducer,
        moves: movesReducer,
        abilities: abilitiesReducer,
        forms: formsReducer,
        router: connectRouter(history),
    });

export function* rootSaga() {
    yield all([fork(pokemonsSaga), fork(movesSaga), fork(abilitiesSaga), fork(formsSaga)]);
}
