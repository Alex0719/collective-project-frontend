import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { roleSuccess, roleFailed } from 'actions/roleActions';
import { ROLE_REQUEST } from 'constants/role';
import request from 'utils/request';

export function* doGetRole() {
  const requestURL = 'https://localhost:44340/account/role';
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };

  try {
    const role = yield call(request, requestURL, options);
    yield put(roleSuccess(role));
  } catch (err) {
    yield put(roleFailed(err.response));
  }
}

export default function* getRoleSaga() {
  yield takeLatest(ROLE_REQUEST, doGetRole);
}
