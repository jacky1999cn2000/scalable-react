// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

function fetchTopicsFromServer(){
  return fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
}

function* fetchTopics(){
  try{
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  }catch(e){
    yield put(requestTopicsFailed(e.message));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
