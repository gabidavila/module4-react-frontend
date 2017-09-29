import React from 'react';
// import City from './City';
import LocationState from './State';
import LocationCity from './City';
import { Form } from 'semantic-ui-react';
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
      this.onSelectChange();
      if(this.state.currentState != "") {
      getCities(this.state.currentState)
      .then((cities) => this.setState({ cities }));
    }
    });
  }

  handleCityChange = (cityId) => {
    this.setState({
      currentCity: cityId
    }, () => this.onSelectChange());
  }

  onSelectChange() {
    this.props.onFilterChange({city_id: this.state.currentCity, state: this.state.currentState });
  }

  render() {
    return(
      <div>
        <LocationState required={this.props.required} states={this.state.states} currentState={this.state.currentState} onStateChange={this.handleStateChange}/>
        <LocationCity required={this.props.required} locations={this.state.cities} currentCity={this.state.currentCity} onCityChange={this.handleCityChange} />
      </div>
    );
  }
}

export default LocationFilter;
