const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getStates = (conferenceOnly = false) => {
  let url = BASE_URL + "/locations/states";

  if (conferenceOnly) {
    url = BASE_URL + "/conferences/states";
  }

  return fetch(url)
    .then((response) => response.json());
};

const getCities = (state, conferenceOnly = false) => {
  let url = BASE_URL + `/locations/states/${state}/cities`;

  if (conferenceOnly) {
    url = BASE_URL + `/conferences/states/${state}/cities`
  }

  return fetch(url)
    .then((response) => response.json());
};

export { getStates, getCities };
