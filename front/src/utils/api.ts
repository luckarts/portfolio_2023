import request from 'utils/request';
export const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };
import { makeApiPayload } from './makeApiPayload';
//projects
export function getProjets() {
  const options = makeApiPayload('/api/projects/get/all', 'GET');
  return request(options);
}
export function getProjetByName(projectName: string) {
  const options = makeApiPayload(`/api/projects/get/by-name/${projectName}`, 'GET');
  return request(options);
}
export function getProjetById(id: number) {
  const options = makeApiPayload(`/api/projects/get/by-id/${id}`, 'GET');
  return request(options);
}
export function getProjetsByTag(tag: string) {
  const options = makeApiPayload(`/api/projects/get/by-tag/${tag}`, 'GET');
  return request(options);
}
export function createProjet(payload: any) {
  const options = makeApiPayload('/api/projects/post', 'POST', payload, headers);
  return request(options);
}
export function updateProjet(projectId: string, payload: any) {
  const options = makeApiPayload(`/api/projects/update/${projectId}`, 'PUT', payload, headers);
  return request(options);
}

export function getTags() {
  const options = makeApiPayload(`/api/tags/get/all`, 'GET');
  return request(options);
}

export function postLogin(payload: any) {
  const options = makeApiPayload('/api/auth/login', 'POST', payload);
  return request(options);
}

export function getLogout() {
  const options = makeApiPayload('/logout', 'GET');
  return request(options);
}

export function RegisterUser(data: any) {
  const options = makeApiPayload(`/api/auth/signup`, 'POST', data);
  return request(options);
}
export function GetAdminUser() {
  const options = makeApiPayload(`/api/auth/profile`, 'GET', null, headers);
  return request(options);
}
export function GetUserProfile() {
  const options = makeApiPayload(`/api/user_profile`, 'GET');
  return request(options);
}

export function UpdateUserProfile(payload: any) {
  const options = makeApiPayload(`/api/user_profile/1`, 'PUT', payload, headers);
  return request(options);
}

//experiences

export function getExperiences() {
  const options = makeApiPayload('/api/experiences/get/all', 'GET');
  return request(options);
}
export function getExperiencesByCompanyPath(company: string) {
  const options = makeApiPayload(`/api/experiences/get/experiences/${company}`, 'GET');
  return request(options);
}

export function createExperience(payload: any) {
  const options = makeApiPayload('/api/experiences/post/listexperience', 'POST', payload, headers);
  return request(options);
}

export function updateExperience(experienceId: string, payload: any) {
  const options = makeApiPayload(`/api/experiences/update/${experienceId}`, 'PUT', payload, headers);
  return request(options);
}

export function deleteExperience(experienceId: string) {
  const options = makeApiPayload(`/api/experiences/delete/${experienceId}`, 'DELETE', null, headers);
  return request(options);
}
