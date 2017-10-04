import React from 'react';
import Topics from './Topics';
import { getTopics } from '../../adapters/talks';
import Snap from 'snapsvg-cjs'

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
    let t = Snap('#triangle2')
    let path = 'M 37,38 5,49 5,29 z'
    let p = t.path( path )
    p.attr({fill: "#fff"})
    p.animate({transform: 'translate(20)'}, 400)
  }

  onSelectChange() {
    this.props.onFilterChange({ topic: this.state.topic });
  }

  render() {
    return(
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', gridGap: '3em', padding: '40px', backgroundColor: '#362386', marginBottom: '20px', width: '100%'}}>
        <h1 style={{color: '#fff', marginLeft: '0'}}>Select a Topic <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="triangle2" width='100' height='50'></svg></h1>
        <Topics required={this.props.required} topics={this.state.topics} currentTopic={this.state.currentTopic} onTopicChange={this.props.onFilterChange}/>
      </div>
    );
  }
}

export default TopicFilter;
