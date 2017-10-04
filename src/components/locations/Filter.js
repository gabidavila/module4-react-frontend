import React from 'react';
import LocationState from './State';
import LocationCity from './City';
import { getStates, getCities } from '../../adapters/locations';
import Snap from 'snapsvg-cjs'

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
    let t = Snap('#triangle')
    let path = 'M 37,38 5,49 5,29 z'
    let p = t.path( path )
    p.attr({fill: "#fff"})
    p.animate({transform: 'translate(20)'}, 400)
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
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gridGap: '3em', padding: '40px', backgroundColor: '#362386', marginBottom: '20px', width: '100%'}}>
        <h1 style={{color: '#fff', marginLeft: '0'}}>Find a Conference <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="triangle" width='100' height='50'></svg>
        </h1>
        <div>
          <LocationState required={this.props.required} states={this.state.states} currentState={this.state.currentState} onStateChange={this.handleStateChange}/>
          <LocationCity required={this.props.required} locations={this.state.cities} currentCity={this.state.currentCity} onCityChange={this.handleCityChange} />
        </div>
      </div>
    );
  }
}

export default LocationFilter;
