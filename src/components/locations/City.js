import React from 'react';
import { Form } from 'semantic-ui-react';

class LocationCity extends React.Component {

  state = {
    currentCity: this.props.currentCity,
    cities: this.props.locations
  };

  handleChange = (event) => {
    const cityId = event.target.value;

    this.setState({
      currentCity: cityId
    });

    this.props.onCityChange(cityId);
  }

  render() {
    let cityList = [<option key={-1} value="">Select...</option>];
    cityList = [...cityList, this.props.locations.map((location, index) => <option key={index} value={location.id}>{location.city}</option>)];
    return (
      <Form.Field name="city" required={this.props.required} value={this.state.currentCity} control="select" label="City" onChange={this.handleChange}>
        {cityList}
      </Form.Field>
    );
  }
}

export default LocationCity;
