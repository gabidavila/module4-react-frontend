import queryString from 'query-string';
const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getTalk = (path) => {
  return fetch(BASE_URL + path)
    .then((response) => response.json());
}

const getTalks = (topic) => {
  return fetch(BASE_URL + '/talks?' + queryString.stringify({topic}))
  .then((response) => response.json())
}

const getTopics = () => {
  return fetch(BASE_URL + '/talks/topics')
  .then((response) => response.json())
}

export { getTalk, getTalks, getTopics };
