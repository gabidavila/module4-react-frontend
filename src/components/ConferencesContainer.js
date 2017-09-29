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
    getConferences({
      currentState: this.state.currentState,
      currentCity: this.state.currentCity
    })
      .then((conferences) => this.setState({
        conferences
      }));
  }

  render() {
    console.log(this.state.conferences);
    return(
      <div>
        <LocationFilter />
      </div>
    );
  }
}

export default ConferencesContainer;
