import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PUBLIC_USER, UPDATE_PUBLIC_USER } from 'containers/UserPage/constants';
import { asyncEndAction, asyncStartAction, setUserAction } from 'containers/UserPage/actions';
import { showAlert } from 'common/saga';
import ApiEndpoint from 'utils/apis';
import { GET, POST, PUT } from 'utils/constants';
import request from 'utils/request';
import { push } from 'redux-first-history';

export function* handleGetUSer() {
  const requestUrl = ApiEndpoint.getUserPublicPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null);

  yield put(asyncStartAction());
  try {
    const { user } = yield call(request, payload);
    if (user) {
      yield put(setUserAction(user));
    }
    return yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.message);
  }
}

export function* handleUpdateUSer({ user }) {
  const requestUrl = ApiEndpoint.updateExperiencePath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, PUT, user, {
    Authorization: true
  });

  yield put(asyncStartAction());
  try {
    const { user } = yield call(request, payload);
    if (user) {
      yield put(setUserAction(user));
    }
    yield put(asyncEndAction());
    yield put(push('/'));
    window.location.reload();
  } catch (error) {
    yield put(asyncEndAction());
    return yield showAlert('error', error.data.message);
  }
}
export default function* projectPageSaga() {
  yield takeLatest(GET_PUBLIC_USER, handleGetUSer);
  yield takeLatest(UPDATE_PUBLIC_USER, handleUpdateUSer);
}
