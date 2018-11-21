import { takeLatest, call, put } from 'redux-saga/effects';

import { userLogged, loginUserFailed } from 'actions/loginActions';
import { LOGIN_REQUEST } from 'constants/login';
import request from 'utils/request';

export function* doLogin({ values }) {
  const requestURL = 'https://localhost:44340/account/login';

  try {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(values),
    };
    const loggedUser = yield call(request, requestURL, options);

    yield put(userLogged(loggedUser));
  } catch (err) {
    yield put(loginUserFailed(err.response));
  }
}

export default function* loginUserSaga() {
  yield takeLatest(LOGIN_REQUEST, doLogin);
}
