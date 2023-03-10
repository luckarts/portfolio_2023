import {
  getProfileSuccessAction,
  hideHeaderAction,
  isLoggedErrorAction,
  isLoggedSuccessAction,
  logoutErrorAction,
  logoutSuccessAction
} from 'containers/App/actions';
import { GET_PROFILE_REQUEST, LOGOUT, REFRESH_TOKEN } from 'containers/App/constants';
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import ApiEndpoint, { BASE_URL } from 'utils/api';
import { GET, POST } from 'utils/constants';
import request from 'utils/request';

/**
 *  query logged in user profile
 * @returns {IterableIterator<*>}
 */
export function* handleProfile() {
  const requestUrl = ApiEndpoint.getProfilePath();
  const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, headers);

  try {
    const response = yield call(request, payload);

    yield put(isLoggedSuccessAction());
    yield put(hideHeaderAction(false));
    return yield put(getProfileSuccessAction(response));
  } catch (error) {
    return yield put(isLoggedErrorAction());
  }
}

/**
 * logout logged in user
 * @returns {IterableIterator<*>}
 */
export function* handleLogout() {
  const requestUrl = ApiEndpoint.getLogoutPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, true, {});
  try {
    yield call(request, payload);
    return yield put(logoutSuccessAction());
  } catch (error) {
    return yield put(logoutErrorAction(error));
  }
}

export default function* appPageSaga() {
  yield takeEvery(LOGOUT, handleLogout);
  yield takeLatest(GET_PROFILE_REQUEST, handleProfile);
}
