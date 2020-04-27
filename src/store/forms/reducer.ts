import { Reducer } from 'redux';
import { FormState, FormActionTypes } from './types';

export const initialState: FormState = {
    data: [],
    item: {},
    errors: undefined,
    loading: false,
};

const reducer: Reducer<FormState> = (state = initialState, action) => {
    switch (action.type) {
        case FormActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true };
        }
        case FormActionTypes.FETCH_ITEM_SUCCESS: {
            return { ...state, loading: false, item: action.payload };
        }
        case FormActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        case FormActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as formsReducer };
