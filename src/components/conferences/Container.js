import React from "react";
import { Route } from 'react-router-dom';
import LocationFilter from '../locations/Filter';
import ConferencesList from './List';
import { getConferences } from "../../adapters/conferences";
import ConferenceShow from './Show';

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
    console.log("conferences", this.state.conferences);
    return(
      <div>
      <Route exact path="/conferences" render={(props) =>
          <div>
            <LocationFilter {...props} onFilterChange={this.handleChange} />
            <ConferencesList {...props} conferences={this.state.conferences} />
          </div>
      } />

      <Route path="/conference/:id" render={(routeProps) => {
        const id = routeProps.match.params
        if (this.state.conferences.length) {
          const conference = this.state.conferences.find(c => c.id == id )
          return <ConferenceShow {...conference} />
        } else {
          return null
        }
      }
      } />
      </div>
    );
  }
}

export default ConferencesContainer;
