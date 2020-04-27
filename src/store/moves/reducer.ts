import { Reducer } from 'redux';
import { MoveState, MoveActionTypes } from './types';

export const initialState: MoveState = {
    data: [],
    item: {},
    errors: undefined,
    loading: false,
};

const reducer: Reducer<MoveState> = (state = initialState, action) => {
    switch (action.type) {
        case MoveActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true };
        }
        case MoveActionTypes.FETCH_ITEM_SUCCESS: {
            return { ...state, loading: false, item: action.payload };
        }
        case MoveActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        case MoveActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as movesReducer };
