import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import LocationFilter from "../locations/Filter";
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class ConferenceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: {
        startDateCalendar: moment(),
        startDate: moment(),
        endDateCalendar: moment().add(2, "years"),
        endDate: moment()
      },
      name: "",
      description: "",
      url: "",
      image: "",
      city: null,
      state: ""
    }
  }

  handleStartDateChange = (moment) => {
    this.handleDateChange(moment, "startDate");
  };

  handleEndDateChange = (moment) => {
    this.handleDateChange(moment, "endDate");
  };

  handleDateChange = (moment, dateType) => {
    this.setState({
      dates: Object.assign({}, this.state.dates, { [dateType]: moment })
    });
  };

  handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    this.setState({ [fieldName]: fieldValue });
  };

  handleLocationChange = (information) => {
    console.log(information);
  };

  render() {
    console.log(this.state);
    return (
      <Form onChange={this.handleChange}>
        <Form.Field control="input" name="name" label="Name" value={this.state.name}/>
        <Form.Field control="textarea" name="description" label="Description" value={this.state.description}/>
        <Form.Field control="input" name="url" label="URL" value={this.state.url}/>
        <Form.Field control="input" name="image" label="Image" value={this.state.image}/>
        <div className="field">
          <label>Start Date</label>
          <DatePicker
            selected={this.state.dates.startDate}
            onChange={this.handleStartDateChange}
            minDate={this.state.dates.startDateCalendar}
            maxDate={this.state.dates.endDateCalendar}
          />
        </div>
        <div className="field">
          <label>End Date</label>
          <DatePicker
            selected={this.state.dates.endDate}
            onChange={this.handleEndDateChange}
            minDate={this.state.dates.startDateCalendar}
            maxDate={this.state.dates.endDateCalendar}
          />
        </div>
        <Form.Field control="input" name="address" label="Address" value={this.state.address}/>
        <LocationFilter onFilterChange={this.handleLocationChange}/>
        <Button type="Submit" style={{ marginTop: "10px" }} fluid primary>Submit</Button>
      </Form>
    );
  }
}

export default ConferenceForm;