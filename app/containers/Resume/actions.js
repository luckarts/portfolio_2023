/*
 *
 * HomePage actions
 *
 */

import {
  ASYNC_START,
  ASYNC_END,
  SET_EXPERIENCES,
  SET_EXPERIENCE,
  GET_EXPERIENCES,
  GET_EXPERIENCE,
  UPDATE_EXPERIENCE,
  CREATE_EXPERIENCE
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
export function setExperienceAction(experience) {
  return {
    type: SET_EXPERIENCE,
    experience
  };
}
export function getExperiencesAction() {
  return {
    type: GET_EXPERIENCES
  };
}
export function getExperienceByCompanyAction(company) {
  return {
    type: GET_EXPERIENCE,
    company
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
