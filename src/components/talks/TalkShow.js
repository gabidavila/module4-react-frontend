import React from 'react'
import { getTalk } from "../../adapters/talks";

class TalkShow extends React.Component {
  state = {
    talk: ""
  }

  componentDidMount () {
    getTalk(this.props.path)
      .then(talk => this.setState({
        talk: talk
      }))
  }

  render () {
    const styling = {textAlign: 'center'}
    return(
      <div style={styling}>
        <h1>{this.state.talk.title}</h1><br/>
        <p>{this.state.talk.description}</p><br/>
        <p># {this.state.talk.topic}</p>
      </div>
    )
  }
}

export default TalkShow
