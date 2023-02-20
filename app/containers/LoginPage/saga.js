import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import { makeFormValuesSelector } from 'containers/LoginPage/selectors';
import { LOGIN_PROCESS } from 'containers/LoginPage/constants';
import { asyncEndAction, asyncStartAction, enterValidationErrorAction } from 'containers/LoginPage/actions';
import { POST } from 'utils/constants';
import { showAlert, showFormattedAlert } from 'common/saga';

export function* attemptLogin() {
  console.log('login');
  yield put(asyncStartAction());
  const formValues = yield select(makeFormValuesSelector());
  const requestUrl = ApiEndpoint.getLoginPath();
  const requestPayload = ApiEndpoint.makeApiPayload(requestUrl, POST, formValues);
  try {
    console.log(requestPayload);
    const sagaRequest = yield call(request, requestPayload);
    localStorage.setItem('token', sagaRequest.token);
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      return yield put(enterValidationErrorAction('error'));
    }
    return yield showAlert('error', error.message);
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_PROCESS, attemptLogin);
}
