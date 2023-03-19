const AUTH_PATH = '/auth/login';
const PROFILE_PATH = '/auth/profile';
const LOGOUT_PATH = '/logout';
export const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };

export default class ApiEndpoint {
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

  /**
   * Make API payload
   * @param url
   * @param method
   * @param payload
   * @param contentType
   * @returns {{headers: {}, method: *}}
   */
  static makeApiPayload = (url, method, payload = null, contentType = null) => {
    console.log(contentType);
    const jsonPayload = {
      url,
      method,
      withCredentials: true,
      headers: {}
    };
    if (contentType && contentType.Authorization) {
      jsonPayload.headers['Authorization'] = headers.Authorization;
    }
    if (contentType && contentType.type) {
      jsonPayload.headers['Content-Type'] = contentType.type;
    } else {
      jsonPayload.headers.Accept = 'application/json';
      jsonPayload.headers['Content-Type'] = 'application/json';
    }
    if (payload !== null) {
      switch (jsonPayload.headers['Content-Type']) {
        case 'application/json':
          jsonPayload.body = payload;
          break;
        case 'multipart/form-data':
          let formData = new FormData();
          const boundary = Math.random().toString().substr(Object.keys(payload));
          jsonPayload.headers['Content-Type'] = `multipart/form-data;`;
          // eslint-disable-next-line no-restricted-syntax
          for (const key of Object.keys(payload)) {
            if (key === 'cv' && payload.cv) {
              formData.append('cv', payload.cv[0]);
            } else if (key === 'img' && payload.img) {
              formData.append('img', payload.img[0]);
            } else if (payload[key] !== undefined || payload[key] !== '') {
              formData.append(key, payload[key]);
            }
          }
          jsonPayload.body = formData;
          break;
        default:
          jsonPayload.body = null;
      }
    }
    return jsonPayload;
  };
}
