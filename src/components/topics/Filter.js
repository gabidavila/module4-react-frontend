import React from 'react';
import Topics from './Topics';
import { getTopics } from '../../adapters/talks';

class TopicFilter extends React.Component {

  state = {
    topics: [],
    currentTopic: ""
  };

  componentDidMount() {
    getTopics()
    .then(
      (topics) => this.setState({ topics, currentTopic: "" })
    );
  }

  onSelectChange() {
    this.props.onFilterChange({ topic: this.state.topic });
  }

  render() {
    return(
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gridGap: '3em', padding: '40px', backgroundColor: '#6e6e6e', marginBottom: '20px'}}>
        <h1>Select a Topic ></h1>
        <div>
          <Topics required={this.props.required} topics={this.state.topics} currentTopic={this.state.currentTopic} onTopicChange={this.props.onFilterChange}/>
        </div>
      </div>
    );
  }
}

export default TopicFilter;
