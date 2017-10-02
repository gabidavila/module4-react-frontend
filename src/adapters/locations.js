const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getStates = (conferenceOnly) => {
  let url = BASE_URL + "/locations/states";

  if (conferenceOnly) {
    url = BASE_URL + "/conferences/states";
  }

  return fetch(url)
    .then((response) => response.json());
};

const getCities = (state) => {
  return fetch(BASE_URL + `/locations/states/${state}/cities`)
    .then((response) => response.json());
};

export { getStates, getCities };
