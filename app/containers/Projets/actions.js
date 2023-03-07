/*
 *
 * HomePage actions
 *
 */

import {
  ASYNC_START,
  ASYNC_END,
  SET_PROJECTS,
  GET_PROJECTS,
  NEW_PROJECT,
  UPDATE_PROJECT,
  SET_PROJECT,
  GET_PROJECT
} from 'containers/Projets/constants.js';

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
  return {
    type: SET_PROJECTS,
    projects
  };
}
export function getProjectAction(projectName) {
  return {
    type: GET_PROJECT,
    projectName
  };
}

export function getProjectsAction() {
  return {
    type: GET_PROJECTS
  };
}

export function newProjectAction(project) {
  return {
    type: NEW_PROJECT,
    project
  };
}

export function setFormValueAction(project) {
  return {
    type: SET_PROJECT,
    project
  };
}

export function updateProjectAction(project, id) {
  return {
    type: UPDATE_PROJECT,
    project,
    id
  };
}
