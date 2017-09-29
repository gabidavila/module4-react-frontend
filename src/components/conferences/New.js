import React from 'react';
import ConferenceForm from "./Form";

class ConferenceNew extends React.Component {
  handleSubmit = (formData) => {
    console.log(formData);
  }
  render() {
    return (
      <ConferenceForm onSubmitForm={this.handleSubmit}/>
    );
  }
}

export default ConferenceNew;