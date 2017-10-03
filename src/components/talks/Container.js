import React from 'react'
import { Route } from 'react-router-dom';
import { getTalks } from "../../adapters/talks";
import TalksList from './List'
import TopicFilter from '../topics/Filter'
import TalkShow from './TalkShow'

class TalksContainer extends React.Component {
  state={
    talks: [],
    currentTopic: ""
  }

componentDidMount() {
  getTalks(this.state.currentTopic)
  .then(talks => {this.setState({
    talks: talks
  }) })
}

handleTopicChange = (event) => {
  this.setState({
    currentTopic: event.target.value
  }, () => {
      getTalks(this.state.currentTopic)
      .then(talks => this.setState({
        talks: talks
      })
      )
   }
  )
}

render() {

  return(
    <div>
      <Route exact path='/talks' render={(routeProps) => {
        return(
          <div>
            <TopicFilter required={false} {...routeProps} onFilterChange={this.handleTopicChange}/>
            <TalksList talks={this.state.talks} {...routeProps} />
          </div>
        )
      }  }/>
    <Route path='/talks/:id' render={(routeProps) => {
        return(
          <TalkShow {...routeProps} path={routeProps.location.pathname}/>
        )
      }  }/>
    </div>
  )
}

}

export default TalksContainer
