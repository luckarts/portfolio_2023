import React from 'react';
import { put } from 'redux-saga/effects';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';

/**
 * show formatted error alert
 * @param type
 * @param message
 * @returns {IterableIterator<*>}
 */
export function* showFormattedAlert(type, message) {
  return yield put(
    enqueueAlertAction({
      message: message,
      type
    })
  );
}

/**
 * show error alert
 * @returns {IterableIterator<*>}
 */
export function* showAlert(type, message) {
  return yield put(
    enqueueAlertAction({
      message,
      type
    })
  );
}
