export const BASE_URL = process.env.REACT_APP_API_BASE_URI;

export default class ApiEndpoint {
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
