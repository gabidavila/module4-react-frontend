import React from 'react';
import { Form } from 'semantic-ui-react';
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
      address: "",
      state: ""
    }
  }

  handleStartDateChange = (moment) => {
    this.setState({
      dates: Object.assign({}, this.state.dates, { endDate: moment })
    }, () => this.handleDateChange(moment, "startDate"));
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

  handleLocationChange = () => {
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
  };

  render() {
    return (
      <Form style={{padding: '100px'}} onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <Form.Field control="input" required name="name" label="Name" value={this.state.name}/>
        <Form.Field control="textarea" required name="description" label="Description" value={this.state.description}/>
        <Form.Field control="input" required name="url" label="URL" value={this.state.url}/>
        <Form.Field control="input" name="image" label="Image" value={this.state.image}/>
        <div className="required field">
          <label>Start Date</label>
          <DatePicker
            selected={this.state.dates.startDate}
            onChange={this.handleStartDateChange}
            minDate={this.state.dates.startDateCalendar}
            maxDate={this.state.dates.endDateCalendar}
          />
        </div>
        <div className="required field">
          <label>End Date</label>
          <DatePicker
            selected={this.state.dates.endDate}
            onChange={this.handleEndDateChange}
            minDate={this.state.dates.startDateCalendar}
            maxDate={this.state.dates.endDateCalendar}
          />
        </div>
        <Form.Field control="input" required name="address" label="Address" value={this.state.address}/>
        <LocationFilter onFilterChange={this.handleLocationChange} required={true}/>
        <input type="submit" style={{ marginTop: "10px" }} value="Submit" className="fluid ui primary button"/>
      </Form>
    );
  }
}

export default ConferenceForm;
