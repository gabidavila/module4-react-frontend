import React from 'react'
import { getTalk } from "../../adapters/talks";

class TalkShow extends React.Component {
  state = {
    talk: {
      speaker: {
        name: "",
        image_uri: "https://semantic-ui.com/images/wireframe/image.png"
      },
      title: "",
      description: "",
      topic: ""
    }
  }

  componentDidMount () {
    getTalk(this.props.path)
      .then(talk => this.setState({
        talk: talk
      }))
  }

  render () {
    return(
      <div className="ui segment">
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img alt="{this.state.talk.speaker.name}" src={this.state.talk.speaker.image_uri} />
            </div>
            <div className="content">
              <a className="header">{this.state.talk.title}</a>
              <div className="meta">
                <i className="user icon"></i><span>by {this.state.talk.speaker.name}</span>
              </div>
              <div className="description">
                <p>{this.state.talk.description}</p>
              </div>
              <div className="extra">
                <i className="hashtag icon"></i>{this.state.talk.topic}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TalkShow
