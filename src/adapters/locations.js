const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getStates = () => {
  return fetch(BASE_URL + "/locations/states")
    .then((response) => response.json());
};

const getCities = (state) => {
  return fetch(BASE_URL + `/locations/states/${state}/cities`)
    .then((response) => response.json());
};

export { getStates, getCities };
