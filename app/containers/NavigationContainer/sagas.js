// import { take, call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { push } from 'react-router-redux';
// use selector and "select" from redux-saga/effects to access state
import selectNavigationContainer from './selectors';

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

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

//////////

function* pushTopic(action){
  yield put(push(`/topics/${action.topic.name}`));
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

/////////

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if(!state.selectedTopic && state.routeLocation === '/'){
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

export function* selectDefaultTopicSaga() {
  //REQUEST_TOPICS_SUCCEEDED will be fired after topics (in componentWillMount()) were loaded successfully
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  selectDefaultTopicSaga,
];
