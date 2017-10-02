import React from 'react';
import ConferenceForm from "./Form";
import { formConferenceParser, createConference } from "../../adapters/conferences";

class ConferenceNew extends React.Component {

  handleSubmit = (formData) => {
    const bodyData = formConferenceParser(formData);
    createConference(bodyData).then((conference) => this.props.history.push(`/conferences/${conference.id}`));
  }

  render() {
    return (
      <ConferenceForm onSubmitForm={this.handleSubmit}/>
    );
  }
}

export default ConferenceNew;
