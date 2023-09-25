import { statusCodesList } from './constants';
//import axios from 'axios';
import { requestProps } from './type';
import axios, { AxiosResponse } from 'axios';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 */
function parseJSON<T>(response: AxiosResponse): T | null {
  if (response?.status === 204 || response?.status === 205) {
    return null;
  }
  return response?.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

function checkStatus(response: AxiosResponse): AxiosResponse {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errorMessage = statusCodesList[response.status] || 'Unknown Error';
  throw new Error(errorMessage);
}
/**
 * Requests a URL, returning a promise
 *
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
export default function request<T>({ url, method, headers, body }: requestProps): Promise<T | null> {
  return axios({
    url: url,
    method: method,
    headers: headers,
    data: body
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      console.error('Erreur lors de la requête :', error);
      throw error;
    }) as Promise<T | null>;
}
