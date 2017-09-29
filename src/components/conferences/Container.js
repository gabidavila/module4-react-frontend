import React from "react";
import LocationFilter from '../locations/Filter';
import ConferencesList from './List'
import { getConferences } from "../../adapters/conferences";
import { Form } from 'semantic-ui-react';

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
        <Form>
          <LocationFilter onFilterChange={this.handleChange} />
        </Form>
        <ConferencesList conferences={this.state.conferences} />
      </div>
    );
  }
}

export default ConferencesContainer;
