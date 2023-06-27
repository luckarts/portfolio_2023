import request from 'utils/request';
export const headers = { Authorization: 'Bearer ' + localStorage.getItem('token') };

//projects
export function getProjets() {
  const options = makeApiPayload('/api/projects/get/projects', 'GET');
  return request(options);
}
export function getProjetByName(projectName) {
  const options = makeApiPayload(`/api/projects/get/project/${projectName}`, 'GET');
  return request(options);
}

export function getProjetsByTag(tag) {
  const options = makeApiPayload(`/api/projects/get/projects/${tag}`, 'GET');
}
export function createProjet(tag) {
  const options = makeApiPayload('/api/projects/post/project', 'POST');
  return request(options);
}
export function updateProjet(projectId) {
  const options = makeApiPayload(`/api/projects/update/${projectId}`, 'UPDATE');
  return request(options);
}
//user
export function getUserPublic() {
  const options = makeApiPayload('/auth/user', 'GET');
  return request(options);
}
export function getLogout() {
  const options = makeApiPayload('/logout', 'GET');
  return request(options);
}
export function RegisterUser(data) {
  const options = makeApiPayload(`/auth/signup`, 'POST');
  return request(options);
}
export function GetUser(data) {
  const options = makeApiPayload(`/auth/profile`, 'GET');
  return request(options);
}

//experiences

export function getExperiences() {
  const options = makeApiPayload('/api/experiences/get/experiences', 'GET');
  return request(options);
}
export function getExperiencesByCompanyPath(company) {
  const options = makeApiPayload(`/api/experiences/get/experiences/${company}`, 'GET'); // Remplacez 'URL_DE_VOTRE_API' par l'URL réelle de votre API
  return request(options);
}

export function createExperience() {
  const options = makeApiPayload('/api/experiences/post/listexperience', 'POST'); // Remplacez 'URL_DE_VOTRE_API' par l'URL réelle de votre API
  return request(options);
}

export function updateExperience(experienceId) {
  const options = makeApiPayload(`/api/experiences/update/${experienceId}`, 'UPDATE'); // Remplacez 'URL_DE_VOTRE_API' par l'URL réelle de votre API
  return request(options);
}

export function deleteExperience(experienceId) {
  const options = makeApiPayload(`/api/experiences/delete/${experienceId}`, 'DELETE'); // Remplacez 'URL_DE_VOTRE_API' par l'URL réelle de votre API
  return request(options);
}

export function getArtworks(experienceId) {
  const options = makeApiPayload('/api/gallery/get/gallery', 'GET'); // Remplacez 'URL_DE_VOTRE_API' par l'URL réelle de votre API
  return request(options);
}

//artworks
// static getArtworksByTagPath = (tag) => `/api/gallery/get/gallery/${tag}`;
// static createArtworksPath = () => '/api/gallery/post/gallery';

export const makeApiPayload = (url, method, payload = null, contentType = null) => {
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
