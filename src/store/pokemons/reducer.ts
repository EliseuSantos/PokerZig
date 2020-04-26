import { Reducer } from 'redux';
import { PokemonState, PokemonActionTypes } from './types';

export const initialState: PokemonState = {
    data: [],
    item: {},
    errors: undefined,
    loading: false,
};

const reducer: Reducer<PokemonState> = (state = initialState, action) => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true };
        }
        case PokemonActionTypes.FETCH_ITEM_SUCCESS: {
            return { ...state, loading: false, item: action.payload };
        }
        case PokemonActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        case PokemonActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as pokemonsReducer };
