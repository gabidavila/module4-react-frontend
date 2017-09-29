import queryString from 'query-string';
const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const getConferences = (filters) => {
  return fetch(BASE_URL + "/conferences?" + queryString.stringify(filters))
    .then((response) => response.json());
}

const formConferenceParser = (formData) => {
  return {
    name: formData.name,
    description: formData.description,
    url: formData.url,
    image_uri: formData.image,
    start_date: formData.dates.startDate.format("YYYY-MM-DD"),
    end_date: formData.dates.endDate.format("YYYY-MM-DD"),
    address: formData.address,
    location_id: formData.city,
    organizer_id: localStorage.getItem("organizerId")
  };
};

const createConference = (conferenceInformation) => {
  const options = {
    method: "POST",
    body: conferenceInformation,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };
  return fetch(BASE_URL + "/conferences", options);
}
export { getConferences, formConferenceParser, createConference };
