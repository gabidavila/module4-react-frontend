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
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gridGap: '3em', padding: '40px', backgroundColor: '#362386', marginBottom: '20px', width: '100%'}}>
        <h1 style={{color: '#fff', marginLeft: '0'}}>Select a Topic ></h1>
        <Topics required={this.props.required} topics={this.state.topics} currentTopic={this.state.currentTopic} onTopicChange={this.props.onFilterChange}/>
      </div>
    );
  }
}

export default TopicFilter;
