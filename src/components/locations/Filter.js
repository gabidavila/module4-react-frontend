import React from 'react';
// import City from './City';
import LocationState from './State';
import { getStates } from '../../adapters/locations';

class LocationFilter extends React.Component {

  state = {
    states: [],
    currentState: "",
    cities: [],
    currentCity: null
  };

  componentDidMount() {
    getStates().then(
      (states) => this.setState({ states })
    );
  }

  handleStateChange = (state) => {
    console.log(state);
  }

  render() {
    return(
      <div>
        <LocationState states={this.state.states} currentState={this.state.currentState} onStateChange={this.handleStateChange}/>
      </div>
    );
  }
}

export default LocationFilter;
