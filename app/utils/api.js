const AUTH_PATH = '/auth/login';
const PROFILE_PATH = '/auth/profile';
const LOGOUT_PATH = '/logout';

export default class ApiEndpoint {
  static getLoginPath = () => AUTH_PATH;

  static getProfilePath = () => PROFILE_PATH;

  static getLogoutPath = () => LOGOUT_PATH;

  static getRegisterPath = () => `/auth/signup`;

  /**
   * Make API payload
   * @param url
   * @param method
   * @param payload
   * @param contentType
   * @returns {{headers: {}, method: *}}
   */
  static makeApiPayload = (url, method, payload = null, contentType = null) => {
    const jsonPayload = {
      url,
      method,
      withCredentials: true,
      headers: {}
    };

    if (!contentType) {
      jsonPayload.headers.Accept = 'application/json';
      jsonPayload.headers['Content-Type'] = 'application/json';
      jsonPayload.headers['Content-Type'] = 'application/json';
    } else {
      jsonPayload.headers = contentType;
    }
    if (payload !== null) {
      const formData = new FormData();
      switch (jsonPayload.headers['Content-Type']) {
        case 'application/json':
          jsonPayload.body = payload;
          break;
        case 'multipart/form-data':
          // eslint-disable-next-line no-restricted-syntax
          for (const key of Object.keys(payload)) {
            formData.append(key, payload[key]);
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
