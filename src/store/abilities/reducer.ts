import { Reducer } from 'redux';
import { AbilityState, AbilityActionTypes } from './types';

export const initialState: AbilityState = {
    data: [],
    item: {},
    errors: undefined,
    loading: false,
};

const reducer: Reducer<AbilityState> = (state = initialState, action) => {
    switch (action.type) {
        case AbilityActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true };
        }
        case AbilityActionTypes.FETCH_ITEM_SUCCESS: {
            return { ...state, loading: false, item: action.payload };
        }
        case AbilityActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        case AbilityActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as abilitiesReducer };
