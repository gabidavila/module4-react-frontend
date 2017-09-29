import queryString from 'query-string';
const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getConferences = (filters) => {
  return fetch(BASE_URL + "/conferences?" + queryString.stringify(filters))
    .then((response) => response.json());
}

export { getConferences };
