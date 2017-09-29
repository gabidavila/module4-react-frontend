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
    getConferences(filters)
      .then((conferences) => this.setState({
        conferences
      }));
  };

  handleChange = (filters) => {
    this.fetchConferences(filters);
  };

  render() {
    return(
      <div>
        <Form>
          <LocationFilter required={false} onFilterChange={this.handleChange} />
        </Form>
        <ConferencesList conferences={this.state.conferences} />
      </div>
    );
  }
}

export default ConferencesContainer;
