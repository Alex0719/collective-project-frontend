import { takeLatest, call, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { getPostsForInternshipFailure, getPostsForInternshipSuccess } from 'actions/getPostsActions';
import { GET_POSTS_FOR_INTERNSHIP_REQUEST } from 'constants/post';
import request from 'utils/request';

export function* getPostsForInternship({ values }) {
  const requestURL = 'https://localhost:44340/internships/1/posts';

  let options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    method: 'GET',
  };


  try {
    let posts;
    if (Cookies.get('Identity')) {
      posts = yield call(request, requestURL, options);
      console.log(posts);
    } else {
      console.log("not authorized");
    }
    yield put(getPostsForInternshipSuccess(posts));
  } catch (err) {
    console.log("err in saga "+err)
    yield put(getPostsForInternshipFailure(err.response));
  }
}

export default function* getPostsForInternshipSaga() {
  yield takeLatest(GET_POSTS_FOR_INTERNSHIP_REQUEST, getPostsForInternship);
}
