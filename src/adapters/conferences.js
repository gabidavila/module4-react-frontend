const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getConferences = (filters) => {
  return fetch(BASE_URL + "/conferences")
    .then((response) => response.json());
}

export { getConferences };
