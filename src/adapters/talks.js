import queryString from 'query-string';
const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getTalk = (path) => {
  return fetch(BASE_URL + path)
    .then((response) => response.json());
}

export { getTalk };
