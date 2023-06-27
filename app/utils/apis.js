const AUTH_PATH = '/auth/login';
const PROFILE_PATH = '/auth/profile';
const LOGOUT_PATH = '/logout';
export const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };

export default class ApiEndpoint {
  /*
  static getRecaptcha = () => process.env.RECAPTCHA_API_KEY;

  //user
  static getLoginPath = () => AUTH_PATH;
  static getProfilePath = () => PROFILE_PATH;
  static getLogoutPath = () => LOGOUT_PATH;
  static getRegisterPath = () => `/auth/signup`;

  static getUserPublicPath = () => `/auth/user`;

  //Project
  static getProjects = () => `/api/projects/get/projects`;
  static getProjectName = (projectName) => `/api/projects/get/project/${projectName}`;
  static getProjectsByTagPath = (tag) => `/api/projects/get/projects/${tag}`;
  static createProjectPath = () => '/api/projects/post/project';
  static updateProjectPath = (projectId) => `/api/projects/update/${projectId}`;

  // experience
  static getExperiencesPath = () => '/api/experiences/get/experiences';
  static getExperiencesByCompanyPath = (company) => `/api/experiences/get/experiences/${company}`;
  static createExperiencePath = () => '/api/experiences/post/listexperience';
  static updateExperiencePath = (experienceId) => `/api/experiences/update/${experienceId}`;
  static deleteExperiencePath = (experienceId) => `/api/experiences/delete/${experienceId}`;
  //artworks
  static getArtworksPath = () => '/api/gallery/get/gallery';
  static getArtworksByTagPath = (tag) => `/api/gallery/get/gallery/${tag}`;
  static createArtworksPath = () => '/api/gallery/post/gallery';

*/
}
