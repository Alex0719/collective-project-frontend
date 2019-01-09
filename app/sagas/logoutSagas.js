import { takeLatest, call, put } from 'redux-saga/effects';

import { userLoggedOut, logoutUserFailed } from 'actions/logoutActions';
import { LOGOUT_REQUEST } from 'constants/logout';
import request from 'utils/request';

export function* doLogout(action) {
  console.log('~~~action', action);
  const requestURL = 'https://localhost:44340/account/logout';
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({}),
  };

  try {
    const effects = [];
    yield call(request, requestURL, options, true);

    yield put(userLoggedOut());
    const { postLogout } = action;
    if(action.postLogout && Array.isArray(postLogout) && postLogout.length) {
      postLogout.map(postAction => effects.push(put(postAction())));
    }
    yield all(effects);
  } catch (err) {
    yield put(logoutUserFailed(err.response));
  }
}

export default function* logoutUserSaga() {
  yield takeLatest(LOGOUT_REQUEST, doLogout);
}
