/*
 *
 * HomePage actions
 *
 */

import { ASYNC_START, ASYNC_END, SET_PROJECTS, GET_PROJECTS } from 'containers/Projets/constants.js';

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

export function setProjectsAction(projects) {
  console.log(projects);
  return {
    type: SET_PROJECTS,
    projects
  };
}

export function getProjectsAction() {
  return {
    type: GET_PROJECTS
  };
}
