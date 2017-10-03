import React from "react";
import { Route } from 'react-router-dom';
import LocationFilter from '../locations/Filter';
import { getConferences } from "../../adapters/conferences";
import ConferenceShow from './Show';
import { Form } from 'semantic-ui-react';
import ConferenceNew from "./New";
import MonthList from './MonthList'
import TalkShow from '../talks/TalkShow'

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
    return (
      <div>

        <Route exact path="/conferences" render={(props) =>
          <div>
            <Form>
              <LocationFilter required={false} {...props} conferenceOnly={true} onFilterChange={this.handleChange}/>
            </Form>
            <MonthList {...props} conferences={this.state.conferences}/>
          </div>
        }/>

      <Route exact path="/conferences/new" render={(routeProps) => {
        return <ConferenceNew {...routeProps} />
      }} />

      <Route exact path="/conferences/:id" render={(routeProps) => {
        const id = parseInt(routeProps.match.params.id, 10)
        if (this.state.conferences.length && !isNaN(id)) {
          const conference = this.state.conferences.find(c => c.id === id )
          return <ConferenceShow {...conference} />
        } else {
          return null
        }
       } }/>

     <Route exact path="/conferences/:conf_id/talks/:id" render={(routeProps) => {
        return <TalkShow path={routeProps.location.pathname}/>
       }} />

      </div>
    );
  }
}

export default ConferencesContainer;
