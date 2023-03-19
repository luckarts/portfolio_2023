import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import { makeFormValuesSelector } from 'containers/LoginPage/selectors';
import { LOGIN_PROCESSS } from 'containers/LoginPage/constants';
import { asyncEndAction, asyncStartAction, enterValidationErrorAction } from 'containers/LoginPage/actions';
import { POST } from 'utils/constants';
import { showAlert } from 'common/saga';
import { push } from 'redux-first-history';

export function* attemptLogin() {
  const formValues = { username: 'test@test.com', password: 'Password45%' };
  const requestUrl = ApiEndpoint.getLoginPath();
  const requestPayload = ApiEndpoint.makeApiPayload(requestUrl, POST, formValues);

  yield put(asyncStartAction());

  try {
    const sagaRequest = yield call(request, requestPayload);
    localStorage.setItem('token', sagaRequest.token);
    yield put(asyncEndAction());
    yield put(push('/'));
    window.location.reload();
  } catch (error) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      return yield put(enterValidationErrorAction('error'));
    }
    return yield showAlert('error', error.message);
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_PROCESSS, attemptLogin);
}
