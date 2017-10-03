import React from 'react';
import { Form } from 'semantic-ui-react';

const Topics = (props) => {
  let topicList = [<option key={-1} value="">Select...</option>];
  if (props.topics.length) {
    topicList = [...topicList, props.topics.map((topic, index) => <option key={index} value={topic}>{topic}</option>)];
  }
  return (
    <Form.Field name="state" required={props.required} control="select" label="Topics" onChange={props.onTopicChange}>
      {topicList}
    </Form.Field>
  );
};

export default Topics;
