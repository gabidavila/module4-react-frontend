import React from 'react'
import { Route } from 'react-router-dom';
import { getTalks } from "../../adapters/talks";
import TalksList from './List'

class TalksContainer extends React.Component {
  state={
    talks: []
  }

componentDidMount() {
  getTalks()
  .then(talks => {this.setState({
    talks: talks
  }) })
}

render() {

  return(
    <div>
      <Route exact path='/talks' render={(routeProps) => {
        return <TalksList talks={this.state.talks} {...routeProps}/>
      }  }/>
    </div>
  )
}

}

export default TalksContainer
