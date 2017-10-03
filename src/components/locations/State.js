import React from 'react';
import { Form } from 'semantic-ui-react';

const LocationState = (props) => {
  let stateList = [<option key={-1} value="">Select...</option>];
  stateList = [...stateList, props.states.map((state, index) => <option key={index} value={state}>{state}</option>)];
  return (
    <Form.Field id={'makeItWhite'} name="state" required={props.required} control="select" label="State" onChange={props.onStateChange}>
      {stateList}
    </Form.Field>
  );
};

export default LocationState;
