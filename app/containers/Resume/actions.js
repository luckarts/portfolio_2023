/*
 *
 * HomePage actions
 *
 */

import {
  ASYNC_START,
  ASYNC_END,
  SET_EXPERIENCES,
  GET_EXPERIENCES,
  GET_EXPERIENCE,
  GET_PUBLIC_USER,
  UPDATE_EXPERIENCE,
  CREATE_EXPERIENCE,
  UPDATE_PUBLIC_USER,
  SET_PUBLIC_USER
} from 'containers/Resume/constants';

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

export function setExperiencesAction(experiences) {
  return {
    type: SET_EXPERIENCES,
    experiences
  };
}

export function setUserAction(user) {
  return {
    type: SET_PUBLIC_USER,
    user
  };
}
export function getExperiencesAction() {
  return {
    type: GET_EXPERIENCES
  };
}
export function getExperienceByCompanyAction(company) {
  return {
    type: GET_EXPERIENCE
  };
}
export function updateExperienceAction(experience) {
  return {
    type: UPDATE_EXPERIENCE
  };
}
export function newExperienceAction(experience) {
  return {
    type: CREATE_EXPERIENCE
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
