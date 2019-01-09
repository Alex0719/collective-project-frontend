import { takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { userLogged, loginUserFailed } from 'actions/loginActions';
import { LOGIN_REQUEST } from 'constants/login';
import request from 'utils/request';

export function* doLogin(params) {
  const requestURL = 'https://localhost:44340/account/login';
  const requestRole = 'https://localhost:44340/account/role';
  let options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };
  let loggedUser;

  try {
    if (Cookies.get('Identity')) {
      loggedUser = yield call(request, requestRole, options);
    } else {
      options = {
        ...options,
        method: 'POST',
        body: JSON.stringify(params.values),
      };
      loggedUser = yield call(request, requestURL, options);
    }
    yield put(userLogged(loggedUser));
    params.funAlert("Autentificarea s-a facut cu succes!",false);
  } catch (err) {
    yield put(loginUserFailed(err.response));
    params.funAlert("Autentificarea a esuat. User-ul sau parola sunt incorecte.", true);
  }
}

export default function* loginUserSaga() {
  yield takeLatest(LOGIN_REQUEST, doLogin);
}
