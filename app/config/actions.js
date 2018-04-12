export const SET_USER_CREDS = 'SET_USER_CREDS';
export const FETCH_LIST_START = 'FETCH_LIST_START';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';

import {put, take, call, takeEvery} from 'redux-saga/effects';

export function setUserCreds(data) {
    return {
        type: SET_USER_CREDS,
        ...data
    }
}

const fetchPosts = function () {
    return fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=react-native&site=stackoverflow')
        .then(response => response.json())
        .then(parsed => parsed.items)
        .catch(error => {
            alert(JSON.stringify(error));
        });
};

const getPosts = function*() {
    try {
        const items = yield call(fetchPosts);
        yield put({type: FETCH_LIST_SUCCESS, items});
    } catch(error) {
        yield put({type: FETCH_LIST_ERROR, error});
    }
};

export function fetchListStart () {
    return {
        type: FETCH_LIST_START
    }
};

export function* postsSaga() {
    yield takeEvery(FETCH_LIST_START, getPosts);
};