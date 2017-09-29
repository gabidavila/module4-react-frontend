import React from 'react';
// import City from './City';
import LocationState from './State';
import LocationCity from './City';
import { getStates, getCities } from '../../adapters/locations';

class LocationFilter extends React.Component {

  state = {
    states: [],
    currentState: "",
    cities: [],
    currentCity: ""
  };

  componentDidMount() {
    getStates().then(
      (states) => this.setState({ states, currentCity: "" })
    );
  }


  handleStateChange = (event) => {
    this.setState({
      currentState: event.target.value
    }, () => {
      getCities(this.state.currentState)
      .then((cities) => this.setState(
        { cities }
      ));
    });
  }

  handleCityChange = (cityId) => {
    this.setState({
      currentCity: cityId
    }, () => console.log(this.state));
  }

  render() {
    return(
      <div>
        <LocationState states={this.state.states} currentState={this.state.currentState} onStateChange={this.handleStateChange}/>
        <LocationCity locations={this.state.cities} currentCity={this.state.currentCity} onCityChange={this.handleCityChange} />
      </div>
    );
  }
}

export default LocationFilter;
