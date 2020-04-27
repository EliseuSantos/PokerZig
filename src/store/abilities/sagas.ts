import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { AbilityActionTypes } from './types';
import { fetchError, fetchSuccess, fetchItemSuccess } from './actions';
import api from '../../helpers/api';

function* handleFetch() {
    try {
        const res = yield call(api.getAbilitiesList, { limit: 19 });

        if (res.error) {
            yield put(fetchError(res.error));
        } else {
            yield put(fetchSuccess(res.results));
        }
    } catch (err) {
        if (err instanceof Error && err.stack) {
            yield put(fetchError(err.stack));
        } else {
            yield put(fetchError('An unknown error occured.'));
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(AbilityActionTypes.FETCH_REQUEST, handleFetch);
}

function* handleFetchItem(action: any) {
    try {
        const res = yield call(api.getAbilityByName, action.payload);

        if (res.error) {
            yield put(fetchError(res.error));
        } else {
            yield put(fetchItemSuccess(res));
        }
    } catch (err) {
        if (err instanceof Error && err.stack) {
            yield put(fetchError(err.stack));
        } else {
            yield put(fetchError('An unknown error occured.'));
        }
    }
}

function* watchFetchItemRequest() {
    yield takeEvery(AbilityActionTypes.FETCH_ITEM_REQUEST, handleFetchItem);
}

function* abilitiesSaga() {
    yield all([fork(watchFetchRequest), fork(watchFetchItemRequest)]);
}

export default abilitiesSaga;
