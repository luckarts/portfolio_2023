/*
 *
 * UserPage actions
 *
 */

import {
  ASYNC_START,
  ASYNC_END,
  GET_PUBLIC_USER,
  UPDATE_PUBLIC_USER,
  SET_PUBLIC_USER
} from 'containers/UserPage/constants';

export function asyncStartAction() {
  return {
    type: ASYNC_START
  };
}

export function asyncEndAction() {
  return {
    type: ASYNC_END
  };
}

export function setUserAction(user) {
  return {
    type: SET_PUBLIC_USER,
    user
  };
}
export function updateUserAction() {
  return {
    type: UPDATE_PUBLIC_USER
  };
}
export function getUserAction() {
  return {
    type: GET_PUBLIC_USER
  };
}
