import React from 'react';
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
    getStates(this.props.conferenceOnly).then(
      (states) => this.setState({ states, currentCity: "" })
    );
  }

  handleStateChange = (event) => {
    this.setState({
      currentState: event.target.value
    }, () => {
      this.onSelectChange();
      if(this.state.currentState != "") {
      getCities(this.state.currentState, this.props.conferenceOnly)
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
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gridGap: '3em', padding: '40px', backgroundColor: '#6e6e6e', marginBottom: '20px'}}>
        <h1>Find a Conference ></h1>
        <div>
          <LocationState required={this.props.required} states={this.state.states} currentState={this.state.currentState} onStateChange={this.handleStateChange}/>
          <LocationCity required={this.props.required} locations={this.state.cities} currentCity={this.state.currentCity} onCityChange={this.handleCityChange} />
        </div>
      </div>
    );
  }
}

export default LocationFilter;
