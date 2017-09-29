import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import LocationFilter from "../locations/Filter";

class ConferenceForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Field control="input" label="Name" />
        <Form.Field control="textarea" label="Description" />
        <Form.Field control="input" label="URL" />
        <Form.Field control="input" label="Image" />
        <Form.Field control="date" label="Start Date" />
        <Form.Field control="date" label="End Date" />
        <Form.Field control="input" label="Address" />
        <LocationFilter/>
        <Button type="Submit" style={{ marginTop: "10px" }} fluid primary>Submit</Button>
      </Form>
    );
  }
}

export default ConferenceForm;