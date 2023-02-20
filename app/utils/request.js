import { StatusCodesList } from './constants';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errorMessage = StatusCodesList[response.status] || 'Unknown Error';
  //console.error(`Error: ${errorMessage}`);
  throw new Error(errorMessage);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options) {
  return fetch(options.url, {
    body: JSON.stringify(options.body),
    headers: options.headers,
    method: options.method
  })
    .then(checkStatus)
    .then(parseJSON);
}
