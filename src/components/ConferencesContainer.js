import React from "react";
import LocationFilter from './locations/Filter';
import { getConferences } from "../adapters/conferences";

class ConferencesContainer extends React.Component {
  state = {
    conferences: [],
    currentState: "",
    currentCity: ""
  };

  componentDidMount() {
    this.fetchConferences({
      state: this.state.currentState,
      city_id: this.state.currentCity
    });
  }

  fetchConferences = (filters) => {
    console.log("Hi");
    getConferences(filters)
      .then((conferences) => this.setState({
        conferences
      }));
  };

  handleChange = (filters) => {
    this.fetchConferences(filters);
  };

  render() {
    console.log(this.state.conferences);
    return(
      <div>
        <LocationFilter onFilterChange={this.handleChange} />
      </div>
    );
  }
}

export default ConferencesContainer;
